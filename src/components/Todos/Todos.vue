<template>
    <div>
        <ul>
            <li 
                :class="{complete: todo.done}"
                v-for="todo in todos.filter(shouldShowTodo)"
                :key="todo.id">
                {{ todo.text }}
                <input type="checkbox" v-model="todo.done">
            </li>
        </ul>

        <TodoInput />

        <label for="show-completed" class="show-completed">
            Show Completed Items?
            <input type="checkbox" :value="this.showDone" @click="showAll">
        </label>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoInput from "./TodoInput";
export default {
  components: {
    TodoInput
  },
  computed: {
    ...mapGetters(["todos", "showDone"])
  },
  methods: {
    ...mapActions(["setShowDone"]),
    shouldShowTodo(todo) {
      if (this.showDone) {
        return true;
      } else {
        return !todo.done;
      }
    },
    showAll() {
      this.setShowDone(!this.showDone);
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  color: darkslategray;
  font-size: 1.4em;
  margin: 1.4em;
  width: 22em;
  position: relative;
}

input[type="checkbox"] {
  position: absolute;
  right: 0;
  padding: 1em;
  cursor: pointer;
}

li {
  list-style-type: none;
  padding: 1em 0 1em 0;
  border-bottom: 1px solid lightblue;
  position: relative;
}

li input {
  transform: scale(1.8);
}

ul {
  padding: 0;
}

label {
  width: 80%;
}

.complete {
  color: gainsboro;
  text-decoration: line-through;
  font-style: italic;
}

.show-completed {
  font-size: 1rem;
  color: slategray;
}

.show-completed input {
  transform: scale(1.4);
}
</style>