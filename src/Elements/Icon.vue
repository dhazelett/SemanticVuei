<template>
    <i v-bind:class="[
        icon,
        rotate,
        {
            loading: loading,
            disabled: disabled,
            fitted: fitted,
            link: link,
            flipped: flipped,
            rotated: rotate,
            circular: circular,
            bordered: bordered,
            corner: corner,

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
        'icon'
    ]">
    </i>
</template>

<script>
import {Types,Sizes,Colors,States} from '../properties'

export default {
  props: Object.assign(
    {
      icon: Object.assign(Types.string, {required: true}),
      rotate: Object.assign(Types.string, {required: false}),

      // variations
      fitted: Types.boolean,
      link: Types.boolean,
      flipped: Types.boolean,
      circular: Types.boolean,
      bordered: Types.boolean,
      corner: Types.boolean,

      // states
      loading: States.loading,
      disabled: States.disabled,
    },
    // sizes
    Sizes,
    // colors
    Colors
  )
}
</script>
