<template>
    <div>
        <h1>This is the Users page</h1>
        <!--p>User Name is {{ $route.params.name }}</p-->
        <h2>List of Users</h2>
        <input type="text" v-model="newUser" @keyup.enter='addUser' placeholder="Add a new user">
        <button class="btn btn-info" @click='addUser'>Add</button>
        <div>
            <h3 v-for="user in users" :key="user.key" class="active"><a href="#">{{ user.name }}</a>
                <button class="destroy" @click="deleteUser(user)">X</button>
            </h3>
            <user v-for="user in users" :key="user.key" :userName= "user.name"></user>
        </div>
        <button @click='goHome'>Go Home</button>
    </div>
</template>

<script>
import {firebaseDB} from '../firebase';
import User from './User.vue'

export default {
    data: () => ({
        users: {}, 
        newUser: ''
    }),
    firebase: {
        users: {
        source: firebaseDB.ref('users'),
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
            console.error(err);
        }
        }
    },
    methods:{
        goHome(){
            this.$router.push('/home');
        },
        addUser(){
            var value = this.newUser && this.newUser.trim()
            if (!value) {
                return
            }
            this.$firebaseRefs.users.push({name: this.newUser})
            this.newUser = ""
        },
        deleteUser(user){
            this.$firebaseRefs.users.child(user['.key']).remove()
        }
    }, 
    components: {
        'user': User
  }

}
</script>
