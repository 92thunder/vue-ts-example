<template>
  <div class="form">
    <input v-model="data" @keyup.enter="submit"/>
    <button @click="submit">Save</button>
  </div>
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
.form {
  width: 100%;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border: 0;
  display: flex;
}
input {
  all: initial;
  font-size: 24px;
  margin: 8px 16px;
  border: 0;
  flex-grow: 9;
}
input:focus {
  box-shadow: none;
}
button {
  all: initial;
  flex-grow: 1;
  background-color: #666666;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
}
button:active {
  background-color: #999;
}
</style>
