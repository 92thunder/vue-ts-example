<template>
  <input v-model="data" @keyup.enter="submit"/>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
  data: string = ''
    submit() {
      if (this.data) {
        this.$emit('submit', this.data)
        this.data = ''
      }
    }
}
</script>

<style scoped>
input {
  width: 100%;
  font-size: 24px;
  padding: 8px 16px;
  border: 0;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}
</style>
