import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCC4MgMaYhxOXl1IQIJLNm0SFfqxvJmpfU',
      authDomain: 'vue-web-app-d6c1c.firebaseapp.com',
      databaseURL: 'https://vue-web-app-d6c1c.firebaseio.com',
      projectId: 'vue-web-app-d6c1c',
      storageBucket: 'vue-web-app-d6c1c.appspot.com'
    })
  }
})
