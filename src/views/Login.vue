<template>
<div class="login">
    <div class="login-wrapper h-100">
      <div class="login-form custom-container" :class="{ 'active' : show}">
        <div class="row h-100">
         <login-cover @changePage="changeBoolen"/>
         <login-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginCover from "../components/login-cover";
import loginForm from "../components/login-form";
export default {
  components: { loginCover,loginForm },
  name: "login",
  data() {
    return { show:''};
  },
  methods:{
      changeBoolen(boolen){this.show = boolen}
   }
};
</script>

