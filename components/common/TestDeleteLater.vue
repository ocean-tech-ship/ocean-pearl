<!-- src/App.vue -->
<template>
  <div>
    <ul id="users">
      <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestDeleteLater',

  data() {
    return {
      users: [],
    }
  },

  created() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users
      })
  },
}
</script>
