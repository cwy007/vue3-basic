# typescript

vue2 this 比普通 js 对象多了很多黑魔法

vue3

import { defineComponent } from 'vue';

defineComponent 让对象获得类型

defineComponent({
  name: '',
  props: {

  },
  setup(props, context) {
    // context attrs slots emit

  }

})

type 的提示

兼容vue2

legacy options

setup
