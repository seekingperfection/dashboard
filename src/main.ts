import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/styles/global.scss'

const app = createApp(App)

// temporary
app.use(store as any)
app.use(router)
app.mount('#app')
