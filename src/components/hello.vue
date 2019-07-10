<template>
  <div>hello {{name}}</div>
</template>
<script>
export default {
  name: 'Hello',
  mounted() {
    setTimeout(() => {
      this.name = 'ZZZZZZ'
    }, 2000)
  },
  data() {
    return {
      name: 'component'
    }
  }
}
</script>
