// 这种模式，是vue3提供的一种强大的功能
// vue3 模块化示例
// 代码提取和复用
// 自定义 hook，vue3中的重中之重
//
import { ref, onMounted, onUnmounted } from 'vue'
// 捕获鼠标位置
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    // 删除副作用
    document.removeEventListener('click', updateMouse)
  })
  return {x, y}
}

export default useMousePosition