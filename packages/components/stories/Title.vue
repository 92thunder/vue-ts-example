<template>
  <h1>
    <slot/>
  </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Title extends Vue {
}
</script>

<style scoped>
h1 {
  padding: 0;
  margin: 0;
  font-size: 48px;
}
</style>
