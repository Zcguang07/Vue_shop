import Vue from 'vue'
import { Button } from 'element-ui'
//用到哪些组件需要按需导入 
import { Form } from 'element-ui'
import { FormItem } from 'element-ui'
import { Input } from 'element-ui'

//然后全局注册一下
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
