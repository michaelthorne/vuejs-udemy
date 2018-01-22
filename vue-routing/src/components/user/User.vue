<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded User ID: {{ id }}</p>
    <br>
    <button class="btn btn-secondary" @click="navigateToHome">Go to Home</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome () {
        this.$router.push({path: '/'})
      }
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    }
  }
</script>
