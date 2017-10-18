<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import Server from './components/Server/Server.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            appServers: Servers,
            appServer: Server,
            appServerDetails: ServerDetails,
            appFooter: Footer
        }
    }
</script>

<style>

</style>
