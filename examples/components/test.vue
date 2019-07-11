<template>
  <div>hello ts{{name}}</div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {

  }
})
export default class componentName extends Vue {
  public data() {
    return {
      name: '张三'
    }
  }
  public methodName() {

  }
}
</script>
<style lang='less' scoped >
</style>
