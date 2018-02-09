<template>
    <div>
        <h1>Vue Todos</h1>

        <Todos :state="state" />
    </div>
</template>

<script>
    import Todos from './components/Todos/Todos'
    export default {
        components: {
            Todos
        },
        data: () => ({
            state: {
                showDone: false,
                todos: [
                    {
                        text: 'Refactor CSS',
                        done: true
                    },
                    {
                        text: 'Scure Docker Instaces',
                        done: false
                    },
                    {
                        text: 'Inject flavoring',
                        done: false
                    }
                ]
            }
        })
    }
</script>