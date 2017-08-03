<template>
    <div>
        <h1>This is the Users page</h1>
        <!--p>User Name is {{ $route.params.userName }}</p-->
        <h2>List of Users</h2>
        <input type="text" v-model="newUser" @keyup.enter='addUser' placeholder="Add a new user">
        <button class="btn btn-info" @click='addUser'>Add</button>
        <div>
            <h3 v-for="user in users" class="active"><a href="#">{{ user.userName }}</a>
                <button class="destroy" @click="deleteUser(user)">X</button>
            </h3>
        </div>
        <button @click='goHome'>Go Home</button>
    </div>
</template>

<script>
export default {
    data: () => ({
    users: [{
        userName: "Alice",
    }, 
    {
        userName: "Bob"
    }], 
    newUser: ''
  }),
    methods:{
      goHome(){
        this.$router.push('/home');
      },
      addUser(){
        this.users.push({userName: this.newUser});
        this.newUser = ""
      },
      deleteUser(user){
          this.users.splice(this.users.indexOf(user), 1)
      }
  }

}
</script>
