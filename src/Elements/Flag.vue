<template>
    <i v-bind:class="[
        code,
        'flag'
    ]"></i>
</template>

<script>
import {Types} from '../properties'
export default {
  props: {
    code: Types.string
  }
}
</script>
