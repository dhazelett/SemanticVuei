<template>
    <div v-bind:class="[
        'ui',
        width,
        floating,
        attachment,
        {
            labeled: labeled,
            icon: icon,
            loading: loading,
            disabled: disabled,
            basic: basic,

            vertical: vertical,

            mini: mini,
            tiny: tiny,
            small: small,
            large: large,
            big: big,
            huge: huge,
            massive: massive,

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
        'buttons'
    ]">
        <template v-if="!or">
            <slot></slot>
        </template>

        <template v-else>
            <slot name="left"></slot>
            <div class="or"></div>
            <slot name="right"></slot>
        </template>
    </div>
</template>

<script>
import {Types} from '../properties'
import Btn from './Btn.vue'

export default {
  props: Object.assign(
    {
      vertical: Types.boolean,
      width: Types.string,
    },
    Btn.props
  ),
  data() {
    return {
      floating: (this.floated) ? this.floated + ' floated' : '',
      attachment: (this.attached) ? this.attached + ' attached' : '',
    }
  }
}
</script>
