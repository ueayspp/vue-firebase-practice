<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/register">Register</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <button @click="logout">Logout</button>
  </nav>
  <router-view />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          alert('Successfully logged out')
          this.$router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          alert(errorMessage)
        })
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
