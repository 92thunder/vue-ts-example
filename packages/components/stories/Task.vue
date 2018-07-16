<template>
  <div class="task">
    <span class="title">{{ task.title }}</span>
    <span class="change-status-button" @click="changeStatus">{{ taskControlText(task.status) }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Task } from 'vue-ts-core'
import { TaskStates } from 'vue-ts-core'

@Component
export default class TaskVue extends Vue {
  @Prop(Object) task!: Task
  @Prop() index!: number

  taskControlText(status: TaskStates) {
    switch(status) {
      case TaskStates.TODO:
        return '→'
      case TaskStates.DOING:
        return '✔️'
      default:
        return '✖️'
    }
  }
  changeStatus() {
    switch(this.task.status) {
      case TaskStates.TODO:
        this.$emit('updateTask', this.index, 'CHANGE_STATUS', TaskStates.DOING)
        break
      case TaskStates.DOING:
        this.$emit('updateTask', this.index, 'CHANGE_STATUS', TaskStates.DONE)
        break
      default:
        this.$emit('updateTask', this.index, 'REMOVE', TaskStates.DONE)
        break
    }
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
  padding: 0 16px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 39px;
}
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.change-status-button {
  cursor: pointer;
}
.change-status-button:hover {
  background-color: #EEE;
}
</style>
