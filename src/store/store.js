import getUser from "../services/getUserList";
import getTodo from "../services/getTodoList";
import addTodo from "../services/addTodo";
import addUsers from "../services/addUser";
import deleteTodo from "../services/deleteTodo";
import completeTodo from "../services/completeTodo";

const state = {
  userList:'',
  todoList:'',
  filteredList:'',
  showTodo:'',
  showCompleteTodo:[]
}

const mutations = {
    SET_USER_LIST(state, setValue) { 
       state.userList = setValue; //Tüm üye listesi
    },

    SET_TODO_LIST(state, _allTodoList) {
        state.todoList = _allTodoList //Tüm listemi todoList içerisine attım.
        state.filteredList = state.todoList.filter(x => x.state == 0 && x.userid == localStorage.getItem('userID'));
         // Giriş yapan Kullanıcı ID'sine göre o kullanıcıya ait üm listeyi getirdim ama sadece uncompleted olanları gösterdim.
    },

    SET_COMPLETED_LIST(state) {
        state.filteredList = state.todoList.filter(x => x.state == 1 && x.userid == localStorage.getItem('userID')); //sadece completed  
    },

    SET_UNCOMPLETED_LIST(state) {
        state.filteredList = state.todoList.filter(x => x.state == 0 && x.userid == localStorage.getItem('userID')); //sadece uncompleted
    },

    SET_TODOSHOW_BOOLEN(state, _boolen) {
        state.showTodo = _boolen; //- todo listesini açma ve kapatma için 
    },

    SET_TODOCOMPLETED_BOOLEN(state, _boolen) {
        state.showCompleteTodo = _boolen; //- todo completed 
    },
}

const actions = {
    fetchUsersList({ commit }) {
        getUser.usersList().then(value => {commit("SET_USER_LIST", value)}) //user bilgilerini aldım, mutationa gönderdim.
    },

    fetchTodoList({ commit }) {
        getTodo.getTodoList().then(value => {commit("SET_TODO_LIST" , value)}) //tüm todolist bilgilerini aldım, mutationa gönderdim.
    },

    fetchUnCompleted({ commit }) {
        commit("SET_UNCOMPLETED_LIST"); 
    },

    fetchCompleted({ commit }) {
        commit("SET_COMPLETED_LIST"); //completed listesi için mutattion'a commit attım.
    },

    showTodoList({ commit }, _showBoolen) {
        commit("SET_TODOSHOW_BOOLEN", _showBoolen);
    },

    todoShowComplete({ commit }, _showBoolen) {
        commit("SET_TODOCOMPLETED_BOOLEN", _showBoolen);
    },

    async fetchCreateUser({ commit },_newUser) {
        await addUsers.addUser(_newUser) //Yeni üye ekleme için bilgileri servise yönlendirdim.
        await getUser.usersList().then(value => {
            commit("SET_USER_LIST", value); //user listesini yenileme
        })
    },

    async fetchAddTodoList({ commit },_payload) { //yeni todo ekle
        await addTodo.fetchAdd(_payload.todoInfo, localStorage.getItem('userID'))
        await getTodo.getTodoList().then(value => {
            commit("SET_TODO_LIST" , value); //-todo listesini yenileme
        })
    },

    async fetchDelete({ commit },_todoIndex) { //- todo sil
        await deleteTodo.deleteTodo(_todoIndex);
        await getTodo.getTodoList().then(value => {
            commit("SET_TODO_LIST" , value); //-todo listesini yenileme
        })
    },

    async fetchAddComplete({ commit },_todo) { //- todo güncelle (tamamlananlar)
        await completeTodo.completeTodo(_todo, localStorage.getItem('userID'));
        await getTodo.getTodoList().then(value => { 
            commit("SET_TODO_LIST" , value); //-todo listesini yenileme
        })
    },
}

const getters = {
    showTodoBoolen: (state) => {return state.showTodo},
    showCompleteTodo: (state) => {return state.showCompleteTodo}
}

export default {
    state,
    mutations,
    actions,
    getters
};
