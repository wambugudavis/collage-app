<template>
  <div class="min-h-screen flex w-full text-sm text-left">
    <div class="w-full md:w-9/12 flex flex-row">
      <div class="flex justify-center w-24 hidden md:block relative bg-davis-grey-dark shadow">
        <nav-bar class="justify-center items-center">
          <p class="fixed text-white font-semibold tracking-wide text-lg">
            C<span class="font-light">ollage</span>
          </p>
        </nav-bar>
        <navigation/>
      </div>
      <div class="flex-1 md:w-11/12 py-4 px-10">
        <nuxt></nuxt>
      </div>
    </div>
    <div class="w-3/12 hidden md:block bg-gray-100 shadow py-4 px-6">
      <side-bar/>
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import NavBar from '../components/Navbar'
  import SideBar from '../components/SideBar'

  export default {
    components: {
      Navigation,
      NavBar,
      SideBar
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,800&display=swap');

  body {
    font-family: 'Work Sans', sans-serif;
    @apply text-gray-900;
  }
</style>
