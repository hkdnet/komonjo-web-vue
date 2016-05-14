<template>
  <div class="channel">
    <i class="fa fa-slack"></i>
    <span class="channelName" v-text="channelName"></span>
  </div>
</template>

<script>
export default {
  props: ["channelName"]
}
</script>

<style>
</style>
