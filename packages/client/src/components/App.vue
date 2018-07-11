<template>
  <div class="container">
    <Title class="title">Tasks</Title>
    <Input @submit="submit"/>
    <div class="tasks">
      <task v-for="(task, index) in tasks" :key="index" :task="task"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Title from 'vue-ts-components/stories/Title.vue'
import Input from 'vue-ts-components/stories/Input.vue'
import TaskVue from 'vue-ts-components/stories/Task.vue'
import { Task } from 'vue-ts-core'

@Component({
  components: {
    Title,
    Input,
    'task': TaskVue
  }
})
export default class App extends Vue {
  tasks: Task[] = []

  submit(value: string) {
    this.tasks.push(new Task(value))
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
  margin-bottom: 24px;
}

.tasks {
  margin-top: 24px;
  width: 100%;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}
</style>
