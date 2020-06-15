<template>
<div class="todo">
    <div class="list h-100">
        <member-info />
        <todo-input />
        <todo-list />
        <todo-sticky-menu />
    </div>
</div>
</template>

<script>
import memberInfo from "../components/member-info";
import todoInput from "../components/todo-input";
import todoList from "../components/todo-list";
import todoStickyMenu from "../components/todo-sticky-menu";

export default {
  components: {memberInfo,todoInput,todoList,todoStickyMenu},
  name: "list",
  data() {
    return {};
  },
   mounted(){
      if(localStorage.getItem("userID") === null)
        this.$router.push('/')
    },
};
</script>

<style lang="scss">
.todo{
    width: 100%;
    height: 100vh;
    .list{
        position: relative;
        &:before{
            content: "";
            position: absolute;
            background-image: url('../assets/images/todo-bg.jpg');
            background-size: cover;
            width: 100%;
            height: 100vh;
            filter: blur(6px);
            background-size: cover;
        }
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: linear-gradient(to right, #6c3d8aeb, #a02bb53d);
            background: linear-gradient(to right, #6c3d8aeb, #a02bb53d);
        }
    }
}
</style>
