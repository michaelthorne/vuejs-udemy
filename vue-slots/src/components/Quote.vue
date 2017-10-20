<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span style="font-style: italic">
                <slot name="subtitle">This is the default subtitle.</slot>
            </span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    div {
        border: 0.125em solid #ccc;
        box-shadow: 0.125em 0.125em 0.25em #000;
        margin: 2em auto;
        padding: 2em;
        text-align: center;
    }

    h2 {
        color: red;
    }

    p {
        color: blue;
    }
</style>
