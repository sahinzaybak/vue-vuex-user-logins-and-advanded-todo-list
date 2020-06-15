<template>
    <div class="col-md-6 pl-0">
        <div class="login-info">
            <h3 class="login-info__title title mb-2">{{$t('userNameText')}}</h3>
            <p class="login-info__desc">{{$t('loginDesc')}}</p>
            <div class="login-area">
                <input v-model="userName" class="login-area__input" type="text" :placeholder="$t('userNamePlaceHolder')" @keyup.enter="signInSystem()"/>
                <input v-model="password" class="login-area__input" type="password" :placeholder="$t('passwordPlaceHolder')" @keyup.enter="signInSystem()"/>
                <a href="#" class="button green float-right" :class="{ 'redirect' : redirect}" @click="signInSystem()">{{$t('signIn')}}</a>
                <span v-if="showAlert" :class="{ 'success' : redirect}">{{alertMessage}}</span>
            </div>
        </div>
        <div class="login-info">
            <h3 class="login-info__title title mb-2">{{$t('createAccountText')}}</h3>
            <p class="login-info__desc">{{$t('createAccountDesc')}}</p>
            <div class="login-area">
                <input class="login-area__input" v-model="createUser" type="text" :placeholder="$t('userNamePlaceHolder')" @keyup.enter="createUsers()"/>
                <input class="login-area__input" v-model="createPassword" type="password" :placeholder="$t('passwordPlaceHolder')" @keyup.enter="createUsers()"/>
                <a class="button green float-right" :class="{ 'redirect' : redirect}" @click="createUsers()">{{$t('signUp')}} </a>
                <span v-if="showAlertAccount" :class="{ 'success' : redirect}">{{alertMessageAccount}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '../languages/i18n'
import { mapState, mapActions } from "vuex";
export default {
  name: "login-form",
  data() {
    return {
        alertMessage:'',
        alertMessageAccount:'',
        userName:'',
        password:'',
        createUser:'',
        createPassword:'',
        show:false,
        showAlert:false,
        showAlertAccount:false,
        redirect:false,
      
        userControl : user => user.userName == this.userName && user.password == this.password,
        memberControl : member => member.userName == this.createUser && member.password == this.createPassword,

        getSignUserInfo(){ //Kullanıcı girişi olduğu zaman localStorageta bilgileri depola.
            const user = this.userList.filter(this.userControl);
            localStorage.setItem('userID', user[0].id)
            localStorage.setItem('userName', user[0].userName)
        },

        getMemberUserInfo(){ //Üye olunduğu zaman localStorageta bilgileri depola.
            const member = this.userList.filter(this.memberControl);
            localStorage.setItem('userID', member[0].id)   
            localStorage.setItem('userName', member[0].userName)  
        },

        isSign(){
            const inUser = this.userList.some(this.userControl); //Böyle bir kullanıcı var mı ?
            if(inUser) {
                this.showAlert=false;
                this.redirect=true; 
                this.getSignUserInfo(); //Onaylanan kullanıcın ID bilgisini aldım ve diğer işlemler için store'a attım.
                this.showAlert=true; 
                this.alertMessage= this.$i18n.t("successLogin") //Giriş başarılı mesajı
                setTimeout(()=>{this.$router.push(`/${i18n.locale}/todolist`)},2000);
            }
            else{
                this.showAlert=true; 
                this.alertMessage= this.$i18n.t("userPasswordError") //Hatalı kullanıcı..
            } 
        },
        
        async createMember(){
            const inUser = this.userList.some(user => user.userName == this.createUser); //Aynı kullanıcı var mı yok mu kontrol ediliyor.
            if(inUser) {
                this.showAlertAccount=true; 
                this.alertMessageAccount= this.$i18n.t("sameUserNameError") //Kullanıcı ismi daha önce alınmış hatası..
            }
            else{
                await this.fetchCreateUser({  //Yeni kullanıcı ekledim..
                    setUserName : this.createUser, 
                    setPassword: this.createPassword
                });
                this.getMemberUserInfo(); //Yeni kullanıcı eklendikten sonra üye(user) bilgileri, işlem yapılabilmek için store'a gönderdim.
                this.redirect=true; 
                this.showAlertAccount=true; 
                this.alertMessageAccount = this.$i18n.t("successCreateUserLogin") //Üye olundu giriş yapılıyor mesajı
                setTimeout(()=>{this.$router.push(`/${i18n.locale}/todolist`)},3000);
            }
        }
    }
  },

  created(){
      this.fetchUsersList;
  },
  computed:{
    ...mapState(["userList"]),
    ...mapActions(["fetchUsersList"]),
  },
  methods:{
    ...mapActions(["fetchCreateUser"]),

    changeInfo(){ this.show = !this.show}, // SignIn ve CreateAccount geçişi

    signInSystem(){ // Kulanıcı Girişi
        if(this.userName != "" && this.password != "") this.isSign(); 
        else{this.showAlert=true; this.alertMessage=this.$i18n.t("nullError")}
    },

    createUsers(){ // Üye Ol
        if(this.createUser != "" && this.createPassword != "") this.createMember()
        else{this.showAlertAccount=true; this.alertMessageAccount=this.$i18n.t("nullError")}
    },
  }
};
</script>

<style lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  &:before {
    content: "";
    position: absolute;
    background-image: url("../assets/images/login-bg.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    filter: blur(6px);
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: linear-gradient(to left,rgba(245, 73, 216, 0.5215686274509804), rgba(191, 81, 225, 0.8509803921568627));
    background: linear-gradient(to left, rgba(245, 73, 216, 0.5215686274509804), rgba(191, 81, 225, 0.8509803921568627));
  }
  &-form {
    position: absolute;
    height: 550px;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 0 auto;
    color: rgb(239, 236, 236);
    z-index: 999;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    box-shadow: #11021f 6px 17px 73px -16px;
    &.active{
        .login-info{
            &:nth-child(1){
                transform: translateY(80px);
                opacity: 0;
            }
            &:nth-child(2){
                transform: none;
                opacity: 1;
                pointer-events: all;
            }
        }
      }
  }
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
  &-info {
    position: absolute;
    color: #383838;
    padding: 65px;
    transition: all 0.4s ease-in-out;
    &__desc{
        font-size: 18px;
        color: #6e6e6e;
    }
    &:nth-child(2){
        transform: translateY(80px);
        opacity: 0;
        pointer-events: none;
    }
  }
  &-area {
    margin-top: 30px;
    .button{
        color:white !important;
        cursor: pointer;
    }
    &__input {
      width: 100%;
      height: 60px;
      margin-bottom: 13px;
      border: 0;
      border: 1px solid #e6e6e6;
      border-radius: 6px;
      text-indent: 13px;
      font-size: 20px;
    }
    span{
        position: relative;
        top: 30px;
        color: #f9465f;
        font-weight: 500;
        font-size: 17px;
        max-width: 250px;
        display: block;
        &.success{
            color:#38c738;
        }
    }
  }
}
</style>
