// index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  users: []
}

// define the possible mutations that can be applied to our state
const mutations = {
    ADD_USER (state) {
        /*
        const newUser = {
        name: 'New user'
        }
        state.users.push(newUser);
        console.log(`Adding a new User ${JSON.stringify(newUser)}`);
        */

        var value = newUser && newUser.trim()
            if (!value) {
                return
            }
            this.$firebaseRefs.users.push({name: newUser})
    },

    EDIT_USER (state, user) {
        let currentUser = state.users.indexOf(user)
        console.log(`Editing User ${state.users.indexOf(user)}`);
        console.log(`New Value: ${JSON.stringify(user)}`);
        state.users[currentUser].name = user.name;
    },

    DELETE_USER (state, user) {
        state.users.splice(state.users.indexOf(user), 1)
    },

}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
})