import { storiesOf } from '@storybook/vue'

import MyButton from './MyButton'

storiesOf('Button', module).add('with text', () => ({
  components: { MyButton },
  template: '<my-button>Hello Button</my-button>'
}))
