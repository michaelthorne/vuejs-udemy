<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form>
                        <app-full-name v-model="fullName"></app-full-name>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                class="form-control"
                                type="email"
                                id="email"
                                v-model="email">
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                class="form-control"
                                type="password"
                                id="password"
                                v-model="password">
                        </div>

                        <div class="form-group">
                            <label for="store_data">
                                <input
                                    type="checkbox"
                                    name="store_data"
                                    id="store_data"
                                    v-model="store_data"
                                    true-value="Yes"
                                    false-value="No"> Store in database?
                            </label>
                        </div>

                        <button
                            type="submit"
                            class="btn btn-default"
                            @click.prevent="submitted = true">Submit</button>
                    </form>
                </div>
            </div>
        </form>
        <div class="row" v-if="submitted">
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Email: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in database? {{ store_data }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data () {
            return {
                fullName: '',
                email: '',
                password: '',
                store_data: '',
                submitted: false
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
