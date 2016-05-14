import Vue from 'vue'
import App from './App.vue'
const Channel = require('./components/Channel.vue');

new Vue({
  el: 'body',
  components: {
    'app': App,
    'channel': Channel
  }
})
