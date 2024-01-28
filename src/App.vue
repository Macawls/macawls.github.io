<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  valueDark: "dark",
  valueLight: "light",
  attribute: "theme",
  selector: "body"
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <ThemeSwitch :switch="toggleDark" :is-dark="isDark" />
    <Main :is-dark="isDark"/>
  </div>
</template>

<script>
import "@/assets/styles/global.css";
import "@/assets/styles/theme.css";
import "@/assets/styles/reset.css"
import Main from "./views/MainView.vue";
import ThemeSwitch from "./components/ThemeSwitcher.vue";


export default {
  name: "App",
  components: {
    Main,
    ThemeSwitch,
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>