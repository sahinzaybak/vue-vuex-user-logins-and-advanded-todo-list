<template>
   <div class="custom-container lang">
        <div class="lang-choose d-flex align-items-center justify-content-start w-100">
            <icon class="lang-icon mr-2" name="globe-americas" scale="1.2"></icon>
            <span class="lang-item mr-2" @click="setLocale('tr')">TR</span>
            <span class="lang-item"  @click="setLocale('en')">EN</span>
       </div>
    </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import {mapActions } from "vuex";
export default {
  components: {Icon},
  name: "choose-lang",
  data() {
    return {langs:['tr','en'], activeLangTR:true, activeLangEN:false};
  },

  methods:{
    ...mapActions(["showTodoList"]),
    setLocale(lang){
        this.$i18n.locale = lang
        this.showTodoList(false),
        this.$router.push({params: {lang:lang}})
    }
  }
};
</script>

<style lang="scss">
.lang{
    position: relative;
    z-index: 999;
        &-choose{
        position: absolute;
        z-index: 9;
        padding-top: 28px;
    }
    &-icon{
       color: #ded7e5;
    }
    &-item{
       font-size: 17px;
       font-weight: 500;
       color: #ded7e5;
       cursor: pointer;
       transition: all 0.3s;
       opacity: 0.6;
       &:hover{
           opacity: 1;
           color:#5d2587;
       }
       &.active{
           opacity: 1;
           color:#5d2587;
       }
    }
}
</style>
