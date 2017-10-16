<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            // Validation for multiple types
            // myName: [String, Array]
            myName: {
                type: String,
                required: true,
                // default: 'Michael'
            },
            /*myAge: {
                type: Object,
                default: function () {
                    return {
                        age: '35'
                    }
                }
            }*/
        },
        methods: {
            switchName () {
                return this.myName.split('').reverse().join('');
            },
            resetName () {
                this.myName = 'Michael';
                this.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
