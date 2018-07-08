<template>
  <div class="container">
    <Title>Tasks</Title>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Title from 'vue-ts-components/stories/Title.vue'

@Component({
  components: {
    Title
  }
})
export default class App extends Vue {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  font-family: 'Roboto', sans-serif;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
