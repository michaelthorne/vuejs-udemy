export const countTextMixin = {
    computed: {
        counted () {
            return this.secondText + ' (' + this.secondText.length + ')';
        },
    },
};
