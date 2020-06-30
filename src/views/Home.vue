<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
//import jsonp from 'jsonp'
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      age: 30,
      data: ''
    }
  },
  mounted() {
    let url = '/api/users'
    axios.get(url).then(() => {

    })
    // jsonp(url, (err, res)=>{
    //   let result = res
    //   this.data = result
    // })
  }
}
</script>
