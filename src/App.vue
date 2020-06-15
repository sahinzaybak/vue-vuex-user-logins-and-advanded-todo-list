<template>
  <div id="app">
    <div class="wrapper">
      <choose-lang />
      <transition name="fade">
          <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import chooseLang from './components/choose-lang'
export default {
  components: {chooseLang},
  name: 'home',
  data () {
    return {}
  },

}
</script>

<style lang="scss">
  @import "assets/scss/bootstrap.min";
  @import "assets/scss/global";
  @import "assets/scss/animate";
  @import "assets/scss/components/buttons";
  @import "assets/scss/components/title";

</style>