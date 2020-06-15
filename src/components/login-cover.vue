<template>
 <div class="col-md-6 px-0">
    <div class="login-cover h-100">
        <img src="https://www.clintec.com/wp-content/uploads/2017/01/Services-Medical-Writing.jpg"/>
        <div class="login-desc">
            <h3 class="login-desc__title big-title" v-html="$t('appTitle')"></h3>
            <p class="login-desc__text mt-3">{{$t('appDesc')}}</p>
            <a href="#" class="button" @click="changeInfo()"><icon class="mr-2" :name="icon" scale="1.4"></icon> {{$t('buttonText')}} </a>
        </div>
    </div>
</div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  components: {Icon},
  name: "login-cover",
  data() {
    return {show:false,icon:'users'};
  },

  methods:{
    changeInfo(){ 
        this.$emit('changePage',  this.show = !this.show) // SignIn ve CreateAccount geçişi için emit.
        if(this.show) this.icon="sign-in-alt"
        else this.icon="users"
    },
  }
};
</script>

<style lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  &-cover {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgb(89, 15, 136);
      opacity: 0.8;
    }
  }
  &-desc {
    position: absolute;
    top: 0;
    z-index: 9;
    padding: 65px;
    &__text {
      font-size: 20px;
      padding-bottom: 30px;
    }
  }
}
</style>
