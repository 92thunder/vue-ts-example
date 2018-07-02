import { storiesOf } from '@storybook/vue'

import MyButton from './MyButton.vue'

storiesOf('Button', module).add('with text', () => ({
  components: { MyButton },
  template: '<my-button>Hello Button</my-button>'
}))
