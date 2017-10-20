<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <span slot="subtitle">Subtitle goes here.</span>
                    <p>The contents of my quote</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        components: {
            appQuote: Quote
        },
        data () {
            return {
                'quoteTitle': 'This is the title of my quote'
            }
        }
    }
</script>

<style>

</style>
