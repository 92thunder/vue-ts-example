<template>
  <div>
    <span>{{ task.title }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Task } from 'vue-ts-core'

@Component
export default class TaskVue extends Vue {
  @Prop(Object) task!: Task

  mounted() {
    console.log(this.task)
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 39px;
  border-bottom: 1px solid #E1E1E1;
}
span {
  font-size: 24px;
  padding: 8px 16px;
  height: 40px;
  margin: 0;
}
</style>
