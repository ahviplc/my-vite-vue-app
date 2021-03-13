<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  {{ count2 }} - {{ nowTimeData }}
  <button @click="getTimeHandle">点我,得到当前时间</button>
</template>

<script>
import {defineProps, reactive, ref, toRefs} from 'vue'
// 导入自定义工具类
import {nowTime} from "../utils/datetime";

export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  },
  /* 使用vue3的 Composition API */
  setup() {
    const state = reactive({count: 0})
    const state2 = reactive({count2: 100})
    const nowTimeData = ref("...")

    // 方法 得到当前时间
    function getTimeHandle() {
      nowTimeData.value = nowTime()
      // 改变 count2
      state2.count2 = 200
    }

    return {
      state,
      nowTimeData,
      getTimeHandle,
      ...toRefs(state2)
    }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
