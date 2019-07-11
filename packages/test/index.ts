// 导入组件，组件必须声明 name
import Test from './test.vue'

// 为组件添加 install 方法，用于按需引入
Test.install = function (Vue) {
  Vue.component(Test.name, Test)
}

export default Test
