<template>
  <div style="display: flex; align-items: center; flex-wrap: wrap; ">
    <li class="links animate__animated animate__lightSpeedInRight">
      <ul v-for="item in items" :key="item.id">
          <a :id="item.id" @click="openLink(item)" target="__blank" rel="noreferrer noopener">{{ item.title }}</a>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  mounted() {
    this.items.forEach((item) => {
      const style = document.createElement("style");
      style.innerHTML = `#${item.id}:hover { 
                            color: ${item.color}; 
                        }\n
                        #${item.id}::after { 
                          background-color: 
                          ${item.color}; 
                        }`;
      document.head.appendChild(style);
    });
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openLink(item) {

      if (item.link === "") {
        item.callback();
        return;
      }
      else {
        window.open(item.link, "_blank");
      }
    }
  }
};
</script>

<style scoped>
.links {
  display: flex;
  width: 100%;
  font-size: 1rem;
  line-height: 18px;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.links li {
  display: inline-block;
  text-align: center;
}


.links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: block;
}



.links a {
  text-align: center;
  text-decoration: none;
  text-rendering: geometricPrecision;
  position: relative;
  display: block;
  width: 100px;
  height: 100%;
}

.links a::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  border-radius: 50px;
  bottom: -55%;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.links a:hover::after {
  width: 100%;
  left: 0;
}

.links a:hover {
  transition: color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  font-weight: 900;
  cursor: pointer;
}

.links a:not(hover) {
  transition: color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1);
}

@media (max-width: 540px) {
  .links {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
