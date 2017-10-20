<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter++">Increase!</button>
        <hr>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        activated() {
            console.log('Activated the New component');
        },
        deactivated() {
            console.log('Deactivated the New component');
        },
        destroyed() {
            console.log('Destroyed the New component');
        }
    }
</script>

<style>

</style>
