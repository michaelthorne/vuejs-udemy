<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Reverse the text</h2>
                <p>{{ exercise1 | reverseText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>Count the length of the text</h2>
                <p>{{ exercise2 | countText }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Computed Properties</h2>
                <p>{{ computedExercise1 }}</p>
                <p>{{ computedExercise2 }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Mixin</h2>
                <p>{{ computedExercise1 }}</p>
                <p>{{ computedExercise2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { countTextMixin } from './countTextMixin';

    export default {
        data () {
            return {
                exercise1: 'This is exercise 1.',
                exercise2: 'This is exercise 2.',
            };
        },
        filters: {
            reverseText: function (value) {
                return value.split('').reverse().join('');
            },
            countText: function (value) {
                return value + ' (' + value.length + ')';
            },
        },
        computed: {
            computedExercise1 () {
                return this.exercise1.split('').reverse().join('');
            },
            computedExercise2 () {
                return this.exercise2 + ' (' + this.exercise2.length + ')';
            },
        },
        mixins: [countTextMixin]
    };
</script>

<style>
</style>
