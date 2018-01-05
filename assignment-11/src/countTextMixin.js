export const countTextMixin = {
    data () {
        return {
            exercise2: 'This is exercise 2.',
        };
    },
    filters: {
        countText (value) {
            return value + ' (' + value.length + ')';
        }
    },
    computed: {
        computedExercise2 () {
            return this.exercise2 + ' (' + this.exercise2.length + ')';
        }
    },
    created () {
        console.log('Created Count Text Mixin');
    }
};
