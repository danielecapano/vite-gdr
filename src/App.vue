<script>
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader,
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
ul,
ol,
li,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
