<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <test-slot v-slot:test1>asdfasd</test-slot>
  </div>
</template>

<script>
// @ is an alias to /src
import TestSlot from '@/components/slot.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      key: 'value'
    }
  },
  components: {
    HelloWorld,
    TestSlot
  }
}
</script>
