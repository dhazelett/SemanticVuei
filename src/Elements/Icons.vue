<template>
    <i v-bind:class="[
        'ui',
        {
            mini: mini,
            tiny: tiny,
            small: small,
            large: large,
            big: big,
            huge: huge,
            massive: massive,
            inverted: inverted
        },
        'icons'
    ]">
        <slot></slot>
    </i>
</template>

<script>
import {Colors,Sizes} from '../properties'

export default {
    props: Object.assign(
      {
        inverted: Colors.inverted
      },
      Sizes
    )
}
</script>
