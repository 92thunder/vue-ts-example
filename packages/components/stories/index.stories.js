import { storiesOf } from '@storybook/vue'

import Title from './Title.vue'

storiesOf('Components', module).add('title', () => ({
  components: { Title },
  template: '<Title>Hello Button</Title>'
}))
