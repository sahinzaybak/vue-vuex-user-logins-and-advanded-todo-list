<template>
   <div class="todo-header">
        <div class="todo-header__item d-flex justify-content-end">
            <div class="todo-header__info">
                <div class="d-flex align-items-center mb-2">
                    <icon class="todo-header__icon" name="user-circle" scale="1.5"></icon>
                    <h3> <p>{{$t('todoUserWelcomeText')}}</p> 
                    {{userName}}</h3>
                </div>
                <div class="d-flex align-items-center float-right" @click="signOut()">
                    <icon class="todo-header__icon mt-1" name="sign-out-alt" scale="1.2"></icon><span>{{$t('signOut')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  components: {Icon},
  name: "member-info",
  data() {
    return {userName:''};
  },
  created(){
     this.userName = localStorage.getItem('userName');
  },
  methods:{
      signOut(){
          this.$router.push('/');
          localStorage.clear(); //çıkış yapıldıysa tüm localstorage/user litesini sil.
        } 
    }
};
</script>

<style lang="scss">
.todo{
    width: 100%;
    height: 100vh;
    &-header{
        position: absolute;
        right: 3%;
        z-index: 9;
        top: 3%;
        img{
            width: 16%;
            border-radius: 13px;
            box-shadow: #232123 6px 18px 37px -14px;
        }
        &__info{
            h3{
                font-size: 22px;
                color: white;
                text-transform: capitalize;
                margin-bottom: 5px;
                p{
                    color: #38d461;
                    font-size: 22px;
                    cursor: inherit;
                    display: contents;
                }
            }
            span{
                font-size: 16px;
                color: #d8d4d4;
                cursor: pointer;
                letter-spacing: 0.1px;
                transition: all 0.3s;
                &:hover{
                    color:#a3ff0f;
                }
            }
        }
        &__icon{
            position: relative;
            color: #38c15c;
            top: -1px;
            margin-right: 8px;
        }
    }
}
</style>
