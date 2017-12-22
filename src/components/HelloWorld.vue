<template>
<div class="hello">
  {{msg}}
</div>
</template>

<script >
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    axios
      .get('http://192.168.88.111:3000/data/')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(err) {
        console.log(err);
      });

  }
}
</script>


<style scoped>

</style>
