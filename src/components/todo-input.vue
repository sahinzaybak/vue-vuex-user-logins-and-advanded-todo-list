<template>
    <div class="custom-container h-100">
        <div class="list-input w-100">
            <input v-model="todo" @keyup.enter="addTodo()" class="list-input__item" autofocus type="text"
            :placeholder="userName + ',' + $t('todoInputPlaceHolder')">
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "todo-input",
  data() {
    return { todo:'', userName:''};
  },
  mounted(){
      this.showTodoList(false);
  },
  created(){
    this.userName = localStorage.getItem('userName');
  },
  methods:{
       ...mapActions(["fetchAddTodoList","showTodoList","todoShowComplete"]),
      addTodo(){
        if(this.todo=="") return 0;
        else{
            this.showTodoList(true);
            this.todoShowComplete({isShow : false , text : this.$i18n.t("taskList")});
            this.fetchAddTodoList({todoInfo : this.todo , userInfo : this.userInfo});
            this.todo="";
        }
       
      },
  }
};
</script>

<style lang="scss">
.todo{
    width: 100%;
    height: 100vh;
    .list{
        position: relative;
        &-input{
            position: absolute;
            top: 45%;
            width: 100%;
            transform: translateY(-50%);
            background-color: rgba(245, 245, 245, 0.72);
            box-shadow: #5f3156 6px 27px 78px -37px;
            padding: 14px;
            border-radius: 7px;
            &:after{
                content: '';
                position: absolute;
                bottom: 0;
                height: 1px;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(86, 83, 83, 0.75), rgba(0, 0, 0, 0));
                width: 100%;
                left: 0;
            }
            &__item{
                width: 100%;
                height: 90px;
                background-color: transparent;
                border: 0;
                font-size: 56px;
                font-weight: 300;
                color: #66546b;
                text-indent: 20px;
                position: relative;
                top: -5px;
            }
        }
    }
}
</style>
