<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hello></hello>
  </div>
</template>

<script>
import easyWoring, {
  Hello
} from '../../dist/easyWorking'
// import easyWoring, {
//   Hello
// } from '../easyWorking'

// import Hello from '../components/hello'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Hello
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
