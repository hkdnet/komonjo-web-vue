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
export default {
  data() {
    return {
      channels: ["hoge", "fuga", "piyo"]
    }
  },
  components: {
    'channel': Channel
  }
}
</script>

<style>
</style>
