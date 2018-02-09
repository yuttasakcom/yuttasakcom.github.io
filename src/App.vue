<template>
    <div>
        <h1>Vue Todos</h1>

        <Todos />
    </div>
</template>

<script>
    import Todos from './components/Todos/Todos'
    export default {
        components: {
            Todos
        }
    }
</script>