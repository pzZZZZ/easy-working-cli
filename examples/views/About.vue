<template>
  <div>
    <Test></Test>
    {{name}}
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import easyWroking, { Test } from '../../packages/index'
console.log(easyWroking, Test);
Vue.use(Test)
@Component({
  name: 'xComponent',
  pageName: 'page title', // 自定义属性
  components: {
    Test
  },
  filters: {
    // xxxx
  },
  directives: {
    // xxxx
  }

})
export default class About extends Vue {
  name: string = '张三'
  public methodName() {

  }
  mounted() {
    console.log('zzzzz');

  }

}
</script>
<style lang='less' scoped >
</style>
