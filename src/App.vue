<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <h1>{{greetings}}</h1>
    <h1>X: {{x}}, Y: {{y}}</h1>
    <button @click="increase">👍+1</button><br/>
    <button @click="updateGreeting">Update Title</button>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch, onMounted, onUnmounted } from 'vue'
import useMousePosition from './hooks/useMousePosition'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  name: 'App',
  setup() {
    const data: DataProps  = reactive({
      count: 0,
      increase: () => { data.count++},
      double: computed(() => data.count * 2),
    })
    const { x, y } = useMousePosition()
    const greetings = ref('')
    const updateGreeting = () => {
      greetings.value += 'Hello! '
    }
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log('old', oldValue)
      console.log('new', newValue)
      document.title = 'updated' + greetings.value + data.count
    })
    
    const refData = toRefs(data)
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 5rem;
}
button {
  font-size: 3rem;
}
</style>
