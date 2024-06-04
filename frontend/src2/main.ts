import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { frappeRequest, setConfig } from 'frappe-ui'
import App from './App.vue'
import './index.css'
import router from './router.ts'
import { GridItem, GridLayout } from 'grid-layout-plus'
import { registerControllers, registerGlobalComponents } from './globals.ts'

setConfig('resourceFetcher', frappeRequest)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component('grid-layout', GridLayout)
app.component('grid-item', GridItem)

registerGlobalComponents(app)
registerControllers(app)

app.mount('#app')
