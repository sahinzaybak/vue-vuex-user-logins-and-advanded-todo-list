<template>
    <div class="todo-wrp" :class="{ 'active' : showTodoBoolen, 'activeTab' : showCompleteTodo.isShow }">
        <h2 class="todo-wrp__title">{{showCompleteTodo.text}} ({{filteredList.length}}) 
             <icon class="icon float-right" name='times' scale="1.8" @click="closeTodo()"></icon>
         </h2>
        <div class="todo-item d-flex align-items-center justify-content-between" v-for="todos in filteredList" :key="todos.id">
            <div class="d-flex flex-column">
                <p>{{todos.todo}}</p>
                <span>{{todos.created_date}}</span>
            </div>
            <div class="todo-actions">
                <icon class="todo-actions__icon mr-2" name="check" scale="1" @click="doComplete(todos)"></icon>
                <icon class="todo-actions__icon" name="trash-alt" scale="1.2" @click="doDelete(todos.id)"></icon>
            </div>
        </div>
        <div class="todo-completed mx-auto" :class="{ 'activeTab' : showCompleteTodo.isShow}">
            <h2 class="todo-completed__text text-center" @click="completed()">
                <icon class="todo-completed__icon mr-3" name="check" scale="1.2"></icon>{{$t('completedTask')}}
            </h2>
            <h2 class="todo-completed__text text-center" @click="unCompleted()">
                <icon class="todo-completed__icon mr-3" name="chevron-left" scale="1.2"></icon>{{$t('backTask')}}
            </h2>
        </div>
    </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import {mapGetters, mapState, mapActions } from "vuex";

export default {
  components: {Icon},
  name: "todo-list",
  data() {
     return {
        show:false,
        showCompleted:false,
        completedText : this.$i18n.t("taskList")
    };
  },

  created(){
    this.fetchTodoList;
    this.todoShowComplete({isShow : false , text : this.$i18n.t("taskList")})
  },

  computed:{
      ...mapState(["filteredList"]),
      ...mapActions(["fetchTodoList"]),
      ...mapGetters(['showTodoBoolen','showCompleteTodo'])
  },
  methods:{
      ...mapActions(["fetchCompleted","fetchUnCompleted","fetchDelete","fetchAddComplete","showTodoList","todoShowComplete"]),
      completed(){
        this.fetchCompleted();
        this.todoShowComplete({isShow : true , text : this.$i18n.t("completedTask")})
    },

    unCompleted(){
        this.fetchUnCompleted();
        this.todoShowComplete({isShow : false , text : this.$i18n.t("taskList")})
    },

    doComplete(_todos){this.fetchAddComplete(_todos)},
    doDelete(_todosID){this.fetchDelete(_todosID)},
    closeTodo(){this.showTodoList(false)}
  }
};
</script>

<style lang="scss">
@import "../assets/scss/components/colors";
.todo{
    width: 100%;
    height: 100vh;
      &-wrp{
        position: fixed;
        right: 3%;
        z-index: 999;
        bottom: 10em;
        width: 520px;
        border-radius: 6px;
        background-color: white;
        box-shadow: #28154C 6px 27px 68px -18px;
        transform: scale(0);
        opacity: 0;
        transition: all 0.4s ease;
        &.active{
            transform: scale(1);
            opacity: 1;
        }
        &__title{
            padding: 21px;
            background-color: linear-gradient(to right, #d21fb4, rgba(180, 26, 228, 0.9));
            background-image: linear-gradient(to right, #d21fb4, rgba(180, 26, 228, 0.9));
            color: #f7f7f7;
            font-size: 22px;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            .icon{
                cursor: pointer;
                transition: all 0.3s;
                &:hover{
                    transform: scale(1.2)
                }
            }

        }
        &.activeTab{
            .todo-wrp__title{
                background-image: linear-gradient(to right, #4dd858, rgba(50, 217, 124, 0.95));
            }
            .todo-item{
                &:hover{
                    border-color:#4dd858;
                    box-shadow: rgba(77, 216, 88, 0.2901960784313726) 6px 27px 57px -12px;
                }
                p{
                    text-decoration: line-through;
                     color: #4a4b4a;
                }
            }
            .todo-actions{
                display: none;
            }
        }
    }
    &-item{
        position: relative;
        font-size: 20px;
        padding: 20px;   
        border-radius: 6px;
        background-color: white;
        transition: all 0.3s ease;
        z-index: 999;
        border-left: 10px solid transparent;
        &:hover{
            transform: scale(1.1);
            border-color: #ca65e2;
            box-shadow: #cb4cd085 6px 27px 57px -12px;
            z-index: 9999;
        }
        &:after{
            content: '';
            position: absolute;
            height: 1px;
            bottom: 0;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(218, 218, 218), rgba(0, 0, 0, 0));
            width: 100%;
            left: 0;
        }
        span{
            font-size: 14px;
            color: #7b7b7b;
        }
    }
    &-actions{
        flex-shrink: 0;
        &__icon{
            width: 38px;
            height: 38px;
            padding: 11px;
            background-color: #f5f2f2;
            border-radius: 100%;
            cursor: pointer;
            &:nth-child(1){
                color:$green;
            }
            &:nth-child(2){
               color: #f54990;
            }
        }
    }
    &-completed{
        position: relative;
        width: max-content;
        background-image: linear-gradient(to right, #4dd858, rgba(50, 217, 124, 0.95));
        color: white;
        border-radius: 50px;
        top: 25px;
        cursor: pointer;
        &__text{
            font-size: 19px;
            font-weight: 400;
            padding: 16px 28px;
             &:nth-child(2){
                display: none;
            }
        }
        &.activeTab{
            background-image: linear-gradient(to right, #d21fb4, rgba(180, 26, 228, 0.9));
            .todo-completed__text{
                &:nth-child(1) {
                    display: none;
                }
                 &:nth-child(2){
                    display: block;
                }
            }
        }
    }
    
}
</style>
