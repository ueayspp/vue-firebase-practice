<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button class="text-white px-4 py-1 bg-green-500 rounded-full" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Cookies from 'js-cookie'

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          alert('Successfully logged in')
          const token = this.email
          Cookies.set('access_token', token, { expires: 1 })
          this.$router.push('/dashboard')
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
