<template>
    <div>
        <h1>This is the Users page</h1>
        <p>User Name is {{ $route.params.userName }}</p>
        <div>
            <ul>
                <li v-for="user in users" class="active"><a href="#">{{ user.userName }}</a></li>
            </ul>
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
    }]
  }),
    methods:{
      goHome(){
        this.$router.push('/home');
      }
  }

}
</script>
