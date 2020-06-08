<template>
  <div id="app">
    <div class="wrapper">
      <transition name="fade">
          <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  @import "assets/scss/bootstrap.min";
  @import "assets/scss/global";
  @import "assets/scss/animate";
</style>