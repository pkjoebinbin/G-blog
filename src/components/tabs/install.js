import Tabs from './Tabs'

const anzhuang = {}

anzhuang.install = function (Vue) {
  Vue.component('tabs', Tabs)

  Object.defineProperty(Vue.prototype, '$test', {
    value () {

    }
  })


  Object.defineProperty(Vue.prototype, '$change', {
    value: null,
    writable: true
  })

    Object.defineProperty(Vue.prototype, '$delete', {
    value:null,
    writable: true
  })

  Object.defineProperty(Vue.prototype, '$start', {
    value () {
      console.log(this.tochange)
      Vue.prototype.$change = this.tochange
      Vue.prototype.$delete = this.ondelete
    }
  })
}

export default anzhuang