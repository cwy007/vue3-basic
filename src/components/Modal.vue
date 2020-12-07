<template>
<teleport to="#modal">
  <div id="center" v-if="isOpen">
    <!-- <slot>默认内容</slot> -->
    <h2><slot>this is a modal</slot></h2>
    <button @click="buttonClick">Close</button>
  </div>
</teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  // 组件向外触发事件的名称
  // 明确显示组件的自定义事件有哪些
  //
  emits: {
    // 值为 null 不对事件进行验证
    'close-modal': null,
    // 带事件验证
    // 值为函数，对触发的事件进行运行时验证
    // type reference
    // 'close-modal': (payload: any) => {
    //   return payload.type === 'close'
    // }
    // context.emit('close-modal', {type: "hello"})
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit('close-modal') // 组件向外触发事件的方法
    }

    return {
      buttonClick
    }
  }
})
</script>
<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>
