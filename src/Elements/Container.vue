<template>
    <div v-bind:class="[
        'ui',
        alignment,
        {
            text: text,
            fluid: fluid
        },
        'container'
    ]">
        <slot></slot>
    </div>
</template>

<script>
import {Types} from '../properties'
export default {
  name: 'container',
  props: {
    text: Types.boolean,
    fluid: Types.boolean
  },
  data() {
    return {
      alignment: (this.aligned) ? this.aligned + ' aligned' : '',
    }
  }
}
</script>
