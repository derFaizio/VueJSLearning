<template>
    <div>
        <h1>This is the Users page</h1>
        <p>User Name is {{ $route.params.userName }}</p>
        <button @click='goHome'>Go Home</button>
    </div>
</template>

<script>
export default {
  methods:{
      goHome(){
        this.$router.push('/home');
      }
  }

}
</script>
