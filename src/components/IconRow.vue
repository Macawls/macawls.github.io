<template>
  <div class="icon-row" ref="target">
    <div v-for="icon in   icons  " :key="icon.id" @mouseover="lerpColor(icon);
    changeTitle(icon);
    " @mouseleave="
  resetColor(icon);
resetTitle(icon);
" @click="
  navigate(icon.link);
resetColor(icon);
">
      <i :class="icon.class" :style="{ color: icon.color }" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";

export default {
  props: {
    icons: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const target = ref(null);
    const { elementX, elementY, isOutside, elementHeight, elementWidth } =
      useMouseInElement(target);

    const cardTransform = computed(() => {
      const MAX_ROTATION = 16;

      const rotationX = (
        MAX_ROTATION / 2 -
        (elementY.value / elementHeight.value) * MAX_ROTATION
      ).toFixed(2);

      const rotationY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION -
        MAX_ROTATION / 2
      ).toFixed(2);

      return isOutside.value
        ? ""
        : `perspective(${elementWidth.value}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    return {
      target,
      cardTransform,
    };
  },
  data() {
    return {
      regularColor: null,
      currentIcon: 0,
    };
  },
  methods: {
    lerpColor: function (icon) {
      icon.color = icon.hoverColor;
    },
    changeTitle: function (icon) {
      document.title = icon.title;
    },
    resetTitle: function () {
      document.title = "Macawls";
    },
    resetColor: function (icon) {
      setTimeout(() => {
        icon.color = this.regularColor;
      }, 200);
    },
    navigate: function (link) {
      window.open(link);
    }
  },
};
</script>

<style scoped>
.icon-row {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 27px;
  row-gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border 0.3s;
}

[theme="dark"] .icon-row {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
  background-color: var(--icon-background-dark);
  border: 2px solid var(--icon-row-border-dark);
}


[theme="light"] .icon-row {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.40);
  background-color: var(--icon-background-light);
  border: 2px solid var(--icon-row-border-light);
}


.icon-row i {
  font-size: 60px;
  transition: color 0.25s ease-in-out;
  margin: 0 20px;
  cursor: pointer;
}

[theme="dark"] .icon-row i {
  color: var(--icon-default-dark);
}

[theme="light"] .icon-row i {
  color: var(--icon-default-light);
}

@media only screen and (max-width: 600px) {
  .icon-row i {
    font-size: 50px;
  }
}

@media only screen and (max-width: 700px) {
  .icon-row {
    max-width: 85%;
    margin: 4% 10% 8%;
  }
}
</style>
