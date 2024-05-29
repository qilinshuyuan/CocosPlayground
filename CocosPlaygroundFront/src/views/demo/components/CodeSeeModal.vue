<template>
  <div>
    <a-modal v-model:open="open" title="查看代码" @ok="handleOk" width="100%" :footer="null">
      <HljsVuePlugin.component language="ts" :code="codeVal" />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import 'highlight.js/lib/common'
import HljsVuePlugin from '@highlightjs/vue-plugin'
const open = ref<boolean>(false)
const codeVal = ref('')
function getCodeByLink(link: string) {
  fetch(link)
    .then((res) => res.text())
    .then((res) => {
      //   console.log(res)
      codeVal.value = res
    })
}
const handleOk = (e: MouseEvent) => {
  open.value = false
}
const openModal = (link: string) => {
  open.value = true
  getCodeByLink(link)
}
defineExpose({
  openModal
})
</script>
