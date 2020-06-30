<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import storage from './storage'
export default {
  name: 'app',
  mounted() {
    //storage.setItem('key1','value1')
    //storage.setItem('user',{name: 'pc'})
    storage.setItem('user', {name: 'pc'}, 'passport')
  }
}
</script>