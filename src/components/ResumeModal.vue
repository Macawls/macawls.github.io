<template>
  <Teleport to="#modal">
    <Transition name="modal">
      <div class="modal-bg" v-if="isActive">
        <div class="modal" ref="modal">
          <font-awesome-icon
            class="close-icon"
            icon="fa-solid fa-xmark"
            @click="$emit('close')"
          />
            <iframe
            src="https://drive.google.com/file/d/1kvCxKgr3B-Ugrex_2mRGBQOM22m1xpxM/preview"
            allow="autoplay"
          ></iframe>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { Teleport, watch } from "vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const modal = ref(null);
    onClickOutside(modal, () => emit("close"));

    // Lock scroll when the modal is open
    watch(
      () => props.isActive,
      (isActive) => {
        if (isActive) {
            document.body.classList.add("modal-open");
        }
        else {
            document.body.classList.remove("modal-open");
        }
      }
    );

    return {
      modal,
    };
  },
  methods: {
    onLoad() {
      this.isLoading = false;
    }
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Teleport,
  },
};
</script>

<style scoped>


.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: larger;
  cursor: pointer;
}


.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  z-index: 9999;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  width: 40vw;
  padding: 20px;
  height: 90vh;
  padding-top: 30px;
}
[theme="dark"] .modal {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
  background-color: var(--card-dark);
  border: solid 2px transparent;
}

[theme="light"] .modal {
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.4);
  background-color: var(--card-light);
  border: solid 2px transparent;
}

iframe {
  width: 100%; 
  height: 100%;
}

@media (max-width: 768px) {
  .modal {
    width: 90%; 
    height: 60vh;
  }
}
</style>
