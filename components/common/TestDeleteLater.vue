<!-- src/App.vue -->
<template>
  <div>
    <ul id="users">
      <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
    </ul>

    <ul id="todos">
      <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestDeleteLater',

  data() {
    return {
      users: [],
      todos: [],
    }
  },

  created() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users
      }),
      fetch('/api/todos')
        .then((res) => res.json())
        .then((json) => {
          this.todos = json.todos
        })
  },
}
</script>
