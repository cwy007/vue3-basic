<template>
  <img :src="result && result.message">
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  // async/await 为 promise 的语法糖
  //
  async setup() {
    const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
    return {
      result: rawData.data
    }
  }
})
</script>
