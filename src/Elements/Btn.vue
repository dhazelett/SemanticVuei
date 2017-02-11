<template>
    <!--
        position + labeled MUST be in this order due to parsing,
        if you don't then you'd have to do labeled=(left|right)
    -->
    <button v-bind:class="[
        'ui',
        social,
        floating,
        attachment,
        position,
        {
            labeled: labeled,
            icon: icon,
            basic: basic,
            compact: compact,
            positive: positive,
            negative: negative,
            fluid: fluid,
            circular: circular,

            loading: loading,
            disabled: disabled,
            active: active,

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
        'button'
    ]">
        <slot></slot>
    </button>
</template>

<script>
import {Types,Sizes,Colors,States} from '../properties'

/*
 * @todo validate float & attachment values
 * @todo .toggle support
 */
export default {
  props: Object.assign(
    {
      // variations
      icon: Types.boolean,
      labeled: Types.boolean,
      basic: Types.boolean,
      compact: Types.boolean,
      positive: Types.boolean,
      negative: Types.boolean,
      fluid: Types.boolean,
      circular: Types.boolean,

      attached: Types.string,
      position: Types.string,
      social: Types.string,
      floated: Types.string,

      // states
      loading: States.loading,
      disabled: States.disabled,
      active: States.active,

      or: Types.boolean,
    },
    Colors,
    Sizes
  ),
  data() {
    return {
      floating: (this.floated) ? this.floated + ' floated' : '',
      attachment: (this.attached) ? this.attached + ' attached' : '',
    }
  }
}
</script>
