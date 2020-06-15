<template>
  <div class="list-sticky d-flex align-items-center justify-content-center" @click="openList()">
    <h3 class="list-sticky__number d-flex align-items-center justify-content-center">{{filteredList.length}}</h3> 
    <icon class="list-sticky__icon" :name='iconName' scale="2.3"></icon>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Icon from 'vue-awesome/components/Icon'
export default {
components: {Icon},
  name: "sticky-menu",
  data() {
    return {show:false, iconName:'clipboard-list'};
  },
  computed:{
   ...mapState(["filteredList","showTodo"]),
  },
  methods:{
      ...mapActions(["showTodoList"]),
      openList(){
        if(this.showTodo == true) this.show = false
        else this.show = true
        this.showTodoList(this.show);
    },
  }
};
</script>

<style lang="scss">
@import "../assets/scss/components/colors";
.todo{
    width: 100%;
    height: 100vh;
    .list{
        position: relative;
        &-sticky{
            position: fixed;
            bottom: 4%;
            right: 2%;
            z-index: 99;
            background-image: linear-gradient(to right, #4dd858, rgba(50, 217, 124, 0.95));
            background-size: 300% 100%;
            padding: 50px;
            border-radius: 100%;
            width: 90px;
            height: 90px;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                background-position: 60% 0;
            }
            &__icon{
                color:white;
            }
            &__number{
                position: absolute;
                top: -16px;
                background-color: #a3ff0f;
                width: 35px;
                height: 35px;
                border-radius: 100%;
                font-size: 16px;
                color: white;
                right: 6px;
            }
              &:before {
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                content: '';
                animation: pulse 1.5s ease infinite;
                border-radius: 100%;
                background-color: #a3ff0f;
            }
        }
    }
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: .4;
        }
        100% {
            transform: scale(1.8);
            opacity: 0;
        }
    }
}
</style>
