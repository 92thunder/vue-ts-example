<template>
  <div class="container">
    <Title class="title">Tasks</Title>
    <Input @submit="submit"/>
    <div class="tasks">
      <div class="tab">
        <div :class="{ active: activeTab === 'todo' }" @click="setActiveTab('todo')">ToDo</div>
        <div :class="{ active: activeTab === 'doing' }" @click="setActiveTab('doing')">Doing</div>
        <div :class="{ active: activeTab === 'done' }" @click="setActiveTab('done')">Done</div>
      </div>
      <task v-for="(task, index) in tasks" :index="index" :key="index" :task="task" v-if="task.status === activeTab"
        @updateTask="updateTask"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Title from 'vue-ts-components/stories/Title.vue'
import Input from 'vue-ts-components/stories/Input.vue'
import TaskVue from 'vue-ts-components/stories/Task.vue'
import { Task } from 'vue-ts-core'
import { TaskState } from '../store/modules/task';

@Component({
  components: {
    Title,
    Input,
    'task': TaskVue
  }
})
export default class App extends Vue {
  activeTab: string = 'todo'

  get tasks() {
    return this.$store.state.task.tasks
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName
  }
  submit(value: string) {
    this.$store.dispatch('addTask', new Task(value))
  }
  updateTask(index: number, event: string, status?: TaskState) {
    if (event === 'CHANGE_STATUS' && status) {
      this.$store.dispatch('changeStatus', {
        index, status
      })
    } else if(event === 'REMOVE') {
      this.$store.dispatch('removeTask', index)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  margin: 0;
  padding: 24px;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 660px;
  margin: 0 auto;
}
.title {
  margin-bottom: 40px;
  line-height: 48px;
}
.tasks {
  margin-top: 40px;
  width: 100%;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}
.tab {
  display: flex;
}
.tab div {
  flex-grow: 1;
  height: 39px;
  border: 1px solid #E1E1E1;
  line-height: 40px;
  text-align: center;
  background-color: #EDEDED;
  font-size: 24px;
  cursor: pointer;
}
.tab div.active {
  background-color: #FFFFFF;
}
</style>
