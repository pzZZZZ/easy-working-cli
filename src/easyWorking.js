import Hello from './components/hello'
const easyWoring = {
  Hello,
}
const install = (Vue, opts = {}) => {
  if (install.installed) return
  Vue.component(Hello.name, Hello)
}

//自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  version: '0.0.1',
  install,
  Hello,
  easyWoring,
}
export {Hello}
