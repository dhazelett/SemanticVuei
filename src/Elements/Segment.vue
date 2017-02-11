<template>
    <div v-bind:class="[
        'ui',
        floating,
        alignment,
        attachment,
        emphasised,
        {
            raised: raised,
            stacked: stacked,
            piled: piled,
            vertical: vertical,
            padded: padded,
            compact: compact,
            circular: circular,

            disabled: disabled,
            loading: loading,
            clearing: clearing,
            basic: basic,

            inverted: inverted,
            red: red,
            orange: orange,
            yellow: yellow,
            olive: olive,
            green: green,
            teal: teal,
            blue: blue,
            violet: violet,
            purple: purple,
            pink: pink,
            brown: brown,
            grey: grey,
            black: black,
        },
        'segment'
    ]">
        <slot></slot>
    </div>
</template>

<script>
import {Types, Colors} from '../properties'

export default {
  data() {
    return {
      attachment: (this.attached !== false) ? this.attached + ' attached' : '',
      floating: (this.floated) ? this.floated + ' floated' : '',
      alignment: (this.aligned) ? this.aligned + ' aligned' : '',
    }
  },
  props: Object.assign(
    {
      raised: Types.boolean,
      stacked: Types.boolean,
      piled: Types.boolean,
      vertical: Types.boolean,
      padded: Types.boolean,
      compact: Types.boolean,
      circular: Types.boolean,

      disabled: Types.boolean,
      loading: Types.boolean,
      clearing: Types.boolean,
      basic: Types.boolean,

      floated: Types.boolean,
      aligned: Types.string,
      attached: [String, Boolean],

      emphasised: Types.string,
    },
    Colors,
  )
}
</script>
