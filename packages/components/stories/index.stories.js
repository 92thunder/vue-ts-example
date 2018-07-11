import { storiesOf } from '@storybook/vue'

import Title from './Title.vue'
import Input from './Input.vue'

storiesOf('Components', module)
  .add('title', () => ({
    components: { Title },
    template: '<Title>Hello Button</Title>'
  }))
  .add('input', () => ({
    components: { Input },
    template: '<Input/>'
  }))
