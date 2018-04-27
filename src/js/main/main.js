import Vue from 'vue'
import Router from 'vue-router'
import productcategory from '@/page/product_category/product_category.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'productcategory',
      component: productcategory
    }
  ]
})
