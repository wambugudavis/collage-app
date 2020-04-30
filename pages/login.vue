<template>
  <div class="flex flex-col flex-1 items-center justify-center">
    <div class="mb-4">
      <p class="text-davis-grey-dark font-semibold tracking-wide" style="font-size: 5rem">
        C<span class="font-light">ollage</span>
      </p>
    </div>
    <form v-if="loginForm" class="w-full md:w-2/3 px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-semibold mb-2" for="email">
          Email
        </label>
        <input
          v-model="login.email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email" type="email" placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-semibold mb-2" for="password">
          Password
        </label>
        <input
          v-model="login.password"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password" type="password" placeholder="********">
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-davis-grey-dark hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="submitLoginForm"
        >
          Sign In
        </button>
        <div
          class="inline-block align-baseline font-semibold text-sm text-davis-grey-dark hover:text-blue-800 cursor-pointer"
          @click="loginForm = !loginForm"
        >
          Create an account
        </div>
      </div>
    </form>
    <form v-else class="px-8 pt-6 pb-8 mb-4">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-first-name">
            Email
          </label>
          <input
            v-model="register.email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name" type="email" placeholder="Email">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-last-name">
            Password
          </label>
          <input
            v-model="register.password"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" type="password" placeholder="*****">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-password">
            Username
          </label>
          <input
            v-model="register.username"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-username" type="text" placeholder="Username">
          <p class="text-gray-600 text-xs italic">This will appear under you account and posts</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-city">
            Location
          </label>
          <input
            v-model="register.location"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city" type="text" value="Kenya" disabled>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-state">
            City
          </label>
          <div class="relative">
            <select v-model="register.city"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state">
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Kisumu</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between pt-2">
        <button
          class="bg-davis-grey-dark hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="submitRegisterForm"
        >
          Create account
        </button>
        <div
          class="inline-block align-baseline font-semibold text-sm text-davis-grey-dark hover:text-blue-800 cursor-pointer"
          @click="loginForm = !loginForm"
        >
          Sign In
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'guest',
    data: () => {
      return {
        loginForm: true,
        register: {
          username: null,
          email: null,
          password: null,
          location: 'Kenya',
          city: null
        },
        login: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      async submitLoginForm () {
        this.$auth.loginWith('local', { data: this.login })
      },

      async submitRegisterForm () {
        await this.$axios.$post('/auth/register', this.register)
          .then(() => {
            this.$auth.loginWith('local', {
              data: {
                email: this.register.email,
                password: this.register.password
              }
            })
          })
      }
    }
  }
</script>
