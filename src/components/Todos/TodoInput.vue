<template>
    <div>
        <form @submit="handleAddTodo($event)">
            <input type="text" v-model="input">
        </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            input: ''
        }),
        methods: {
            handleAddTodo(e) {
                e.preventDefault()
                this.$data.todos.push({ text: this.input, done: false })
                this.input = ''
            }
        }
    }
</script>

<style>
    input[type=text] {
        margin-bottom: 1em;
        padding: 0.8em;
        width: 90%;
        font-size: 0.7em;
    }
</style>