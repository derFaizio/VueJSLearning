import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [{
            name: "Alice",
        }, 
        {
            name: "Bob"
        }]
    }, 
    getters:{
        users(state){
            console.log(JSON.stringify(state.users))
            return state.users
        }
    }, 
    mutations: {
        addUser(state, user){
            return state.users.push(user);
        },
        deleteUser(state, user){
            return state.users.splice(state.users.indexOf(user), 1)
        }
    }, 
    actions: {
        addUser(context, user){
            context.commit('addUser', user)
        }, 
        deleteUser(context, user){
            context.commit('deleteUser', user)
        }
    }

});