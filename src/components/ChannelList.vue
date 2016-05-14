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
let channels = ["hoge", "fuga", "piyo"];
setTimeout(()=> {
  channels.push("foo");
  console.log("pushed");
}, 3000);
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
