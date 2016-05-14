<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <channel-list></channel-list>
  </div>
</template>

<script>
const ChannelList = require('./components/ChannelList.vue');
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  },
  components: {
    'channel-list': ChannelList
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
