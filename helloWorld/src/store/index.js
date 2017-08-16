import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseDB } from '../firebaseConfig'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [{
            name: "Alice",
        }, 
        {
            name: "Bob"
        }],
        greetings: {}
    }, 
    getters:{
        users(state){
            console.log(JSON.stringify(state.users))
            return state.users
        },
        greetings(state){
            console.log(JSON.stringify(state.greetings))
            return state.greetings
        }
    }, 
    mutations: {
        getInitialGreetings(state){
            return firebaseDB.ref('greetings').once('value').then(function(snapshot){
                console.log("Initial Greetings: " + JSON.stringify(snapshot))
                return state.greetings = Object.values(snapshot.val())
            })
        },
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
        },
        getInitialGreetings(context){
            context.commit('getInitialGreetings')
        }
    }

});