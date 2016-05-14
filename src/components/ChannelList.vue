<template>
  <div class="channel-list">
    <ul>
      <li v-for="c in channels">
        <channel :channel-name="c"></channel>
      </li>
    </ul>
  </div>
</template>

<script>
const Channel = require('./Channel.vue');
const KomonjoClient = require("../KomonjoClient.js");
let client = new KomonjoClient("http://192.168.99.100:8000/api");
let channels = [];
client.getChannels()
  .then(e => e.forEach(c => channels.push(c)));
export default {
  data() {
    return {
      channels
    }
  },
  components: {
    'channel': Channel
  }
}
</script>

<style>
</style>
