import { storiesOf } from '@storybook/vue'

import Title from './Title.vue'
import Input from './Input.vue'
import TaskVue from './Task.vue'

import { Task } from 'vue-ts-core'

storiesOf('Components', module)
  .add('title', () => ({
    components: { Title },
    template: '<Title>Hello Button</Title>'
  }))
  .add('input', () => ({
    components: { Input },
    template: '<Input/>'
  }))
  .add('task', () => {
    return {
      components: { TaskVue },
      template: '<TaskVue :task="task"/>',
      data() {
        return {
          task: new Task('title')
        }
      }
    }
  })
