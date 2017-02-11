<template>
    <div v-bind:class="[
        'ui',
        {
            vertical: vertical,
            horizontal: horizontal,
            inverted: inverted,
            fitted: fitted,
            hidden: hidden,
            section: section,
            clearing: clearing
        },
        'divider'
    ]">
        <template v-if="vertical || horizontal">
            <slot></slot>
        </template>
    </div>
</template>

<script>
import {Types} from '../properties'

export default {
  props: {
    // types
    vertical: Types.boolean,
    horizontal: Types.boolean,

    // variations
    inverted: Types.boolean,
    fitted: Types.boolean,
    hidden: Types.boolean,
    section: Types.boolean,
    clearing: Types.boolean
  }
}
</script>
