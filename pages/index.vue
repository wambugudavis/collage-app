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
        <highlight/>
        <feed/>
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
  import Highlight from '../components/Highlight'
  import Feed from '../components/Feed'

  export default {
    components: {
      Navigation,
      NavBar,
      Feed,
      SideBar,
      Highlight
    }
  }
</script>
