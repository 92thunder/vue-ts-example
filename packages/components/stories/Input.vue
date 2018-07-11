<template>
  <input v-model="data" @keyup.enter="submit"/>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      data: ''
    }
  },
  methods: {
    submit() {
      if (this.data) {
        this.$emit('submit', this.data)
        this.data = ''
      }
    }
  }
})
</script>

<style scoped>
input {
  width: 100%;
  height: 40px;
  font-size: 24px;
  padding: 8px 16px;
  border: 0;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}
</style>
