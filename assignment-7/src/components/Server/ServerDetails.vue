<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>
            Server #{{ server.id }}: {{ server.status }}
            <button v-if="server.status != 'Normal'" @click="resetStatus">Change to Normal</button>
        </p>
    </div>
</template>

<script>
    import {serverBus} from '../../main';

    export default {
        data: function () {
            return {
                server: null
            }
        },
        created: function () {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        },
        methods: {
            resetStatus: function () {
                this.server.status = 'Normal';
            }
        }
    }
</script>

<style>

</style>
