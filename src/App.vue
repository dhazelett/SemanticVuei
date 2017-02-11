<template>
    <container id="app">

        <segment attached="top">
            <p>top</p>
        </segment>
        <segment attached>
            <p>middle</p>
        </segment>
        <segment attached="bottom">
            <p>bottom</p>
        </segment>

        <divider horizontal>OR</divider>

        <segment>
            <icons large>
                <icon large green icon="shopping cart"></icon>
                <icon green corner icon="plus"></icon>
            </icons>
        </segment>


        <segment clearing>
            <btn floated="left">
                left
            </btn>
            <btn floated="right">
                right
            </btn>
        </segment>

        <segment>
            <btn compact icon>
                <icon icon="pause"></icon>
            </btn>
        </segment>

        <segment>
            <!-- @fixme -->
            <btn attached="top">Top</btn>
            <div class="ui attached segment">
                <p>k</p>
            </div>
        </segment>

        <segment>
            <btn basic>
                Neat
            </btn>
        </segment>

        <segment>
            <btn icon social="twitter">
                <icon icon="twitter"></icon>
            </btn>
        </segment>

        <segment class="stripe">
            <buttons or>
                <btn slot="left">Save</btn>
                <btn slot="right">Cancel</btn>
            </buttons>
        </segment>

        <segment>
            <buttons width="three">
                <btn blue>
                    <icon icon="save"></icon>
                </btn>
                <btn basic>Cancel</btn>
                <btn red labeled icon position="right">
                    <icon icon="trash"></icon>
                    Delete
                </btn>
            </buttons>
        </segment>

        <segment>
            <buttons floated="left" basic green vertical>
                <btn>
                    Neat
                </btn>
                <btn>
                    Neat
                </btn>
                <btn>
                    Neat
                </btn>
            </buttons>
        </segment>
    </container>
</template>

<script>
import Btn from './Elements/Btn.vue'
import Buttons from './Elements/Buttons.vue'
import Container from './Elements/Container.vue'
import Divider from './Elements/Divider.vue'
import Segment from './Elements/Segment.vue'
import Icons from './Elements/Icons.vue'
import Icon from './Elements/Icon.vue'

export default {
  components: {
    Buttons,
    Btn,
    Container,
    Divider,
    Icons,
    Icon,
    Segment
  }
}
</script>
