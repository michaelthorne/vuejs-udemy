<template>
    <li class="list-group-item" @click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import {serverBus} from '../../main';

    export default {
        methods: {
            serverSelected: function () {
                serverBus.$emit('serverSelected', this.server)
            }
        },
        props: ['server']
    }
</script>

<style scoped>
    div {
        cursor: pointer;
    }
</style>
