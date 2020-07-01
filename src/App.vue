<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
//import storage from './storage'
export default {
  name: 'app',
  data() {
    return {
      resp:{}
    }
  },
  mounted() {
    // this.axios.get('/mock/user/login.json').then(function() {
      
    // })

    this.axios.get('/user/login').then((resp)=>{
      this.resp = resp
    })
  }
}
</script>