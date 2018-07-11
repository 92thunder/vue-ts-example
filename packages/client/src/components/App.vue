<template>
  <div class="container">
    <Title class="title">Tasks</Title>
    <Input @submit="submit"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Title from 'vue-ts-components/stories/Title.vue'
import Input from 'vue-ts-components/stories/Input.vue'

@Component({
  components: {
    Title,
    Input
  }
})
export default class App extends Vue {
  submit(value: string) {
    console.log(value)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  font-family: 'Roboto', sans-serif;
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
</style>
