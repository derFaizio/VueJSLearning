import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseDB } from '../firebaseConfig'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [/*{
            name: "Alice",
        }, 
        {
            name: "Bob"
        }*/],
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
            }).catch(function(err){
                console.log("An error occured while connecting with the server." + err)
            })
        },
        getInitialUsers(state){
            return firebaseDB.ref('users').once('value').then(function(snapshot){
                console.log("Initial Users: " + JSON.stringify(snapshot))
                return state.users = Object.values(snapshot.val())
            }).catch(function(err){
                console.log("An error occured while connecting with the server." + err)
            })
        },
        addUser(state, user){
            //return state.users.push(user);
            return firebaseDB.ref('users').push(user)
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
        },
        getInitialUsers(context){
            context.commit('getInitialUsers')
        }
    }

});