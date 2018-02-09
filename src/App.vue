<template>
    <div>
        <h1>Vue Todos</h1>

        <ul v-for="todo in $data.todos">
            <li :class="{complete: todo.done}">
                {{ todo.text }}
                <input type="checkbox" v-model="todo.done">
            </li>
        </ul>

        <form @submit="handleAddTodo($event)">
            <input type="text" v-model="input">
        </form>
    </div>
</template>

<script>
    export default {
        props: ['state'],
        data() {
            return this.$props.state
        },
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
    .complete {
        color: gainsboro;
        text-decoration: line-through;
        font-style: italic;
    }
</style>