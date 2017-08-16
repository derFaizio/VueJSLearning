<template>
    <div>
        <h1>This is the Users page</h1>
        <!--p>User Name is {{ $route.params.userName }}</p-->
        <h2>List of Users</h2>
        <input type="text" v-model="newUser" @keyup.enter='addUser' placeholder="Add a new user">
        <button class="btn btn-info" @click='addUser'>Add</button>
        <button class="btn btn-info" @click='showUser'>Show</button>
        <div>
            <h3 v-for="user in myusers" :key="user.name" class="active"><a href="#">{{ user.name }}</a>
                <button class="destroy" @click="deleteUser(user)">X</button>
            </h3>
        </div>
        <button @click='goHome'>Go Home</button>
    </div>
</template>

<script>
export default {
    computed: {
      myusers() {
          return this.$store.getters.users
      }
  }, 
    data: () => ({ 
    newUser: ''
  }),
    methods:{
      goHome(){
        this.$router.push('/home');
      },
      addUser(){
        this.$store.dispatch('addUser', {name: this.newUser});
        this.newUser = ""
      },
      deleteUser(user){
          this.$store.dispatch('deleteUser', user)
      },
      showUser(){
          console.log(JSON.stringify(this.$store.getters.users))
      }
  },
  

}
</script>
