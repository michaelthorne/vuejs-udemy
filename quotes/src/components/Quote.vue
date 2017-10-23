<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quotes']
    }
</script>

<style>
    .panel-body {
        color: #111;
        font-family: Arizonia, cursive;
        font-size: 2em;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ff4136;
    }
</style>
