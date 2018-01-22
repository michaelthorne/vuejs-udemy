<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <h2>Vue Resource + Firebase</h2>

        <hr>

        <div class="form-group">
          <label for="username">Username</label>
          <input class="form-control" id="username" type="text" v-model="user.username">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" id="email" type="email" v-model="user.email">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>

        <hr>

        <div class="form-group">
          <label for="node">Node</label>
          <input class="form-control" id="node" type="text" v-model="node">
        </div>

        <button class="btn btn-primary" @click="fetchData">Get Data</button>

        <hr>

        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{ u.username }} – {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit () {
        // console.log(this.user)
        // this.$http.post(data.json, this.user) // URL is stored in `main.js`
        //   .then(response => {
        //     console.log(response)
        //   }, error => {
        //     console.log(error)
        //   })
        this.resource.save({node: this.node}, this.user)
        // this.resource.saveAlt(this.user)
      },
      fetchData () {
        // this.$http.get('') // URL is stored in `main.js`
        //   .then(response => {
        //     // const data = response.json() // Returns a Promise, not the data.
        //     // console.log(data)
        //     return response.json()
        //   })
        //   .then(data => {
        //     // console.log(data)
        //     const resultArray = []
        //     for (let key in data) {
        //       resultArray.push(data[key])
        //     }
        //     this.users = resultArray
        //   })

        this.resource.getData({node: this.node})
          .then(response => {
            return response.json()
          })
          .then(data => {
            const resultArray = []
            for (let key in data) {
              resultArray.push(data[key])
            }
            this.users = resultArray
          })
      }
    },
    created () {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'}
      }
      this.resource = this.$resource('{node}.json', {}, customActions)
    }
  }
</script>

<style>

</style>
