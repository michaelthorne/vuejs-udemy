<template>
    <div>
        <div class="form-group">
            <label for="first_name">First Name</label>
            <input
                class="form-control"
                type="text"
                id="first_name"
                :value="firstName"
                @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="last_name">Last Name</label>
            <input
                class="form-control"
                type="text"
                id="last_name"
                :value="lastName"
                @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                processedValue: ''
            }
        },
        props: ['value'],
        methods: {
            nameChanged (isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                }
                else {
                    name = this.firstName + ' ' + event.target.value;
                }
                this.processedValue = name;
                this.$emit('input', this.processedValue);
            }
        },
        computed: {
            firstName () {
                return this.value.split(' ')[0];
            },
            lastName () {
                return this.value.split(' ')[1];
            }
        }
    }
</script>
