<template>
  <div class="relative">
    <div class="h-screen fixed w-3/12 px-6 right-0">
      <nav-bar>
        <div class="flex flex-row justify-between w-full">
          <div class="relative flex items-center justify-center w-10">
            <svg-icon
              name="Search"
              class="stroke-current text-gray-400 hover:text-gray-700 h-6"
            />
          </div>
          <div class="relative flex items-center justify-center w-10">
            <svg-icon
              name="Notification"
              class="fill-current text-gray-400 hover:text-gray-700 h-12"
            />
            <span class="absolute right-0 mr-3 -mt-1 h-2 w-2 bg-davis-red rounded-full"></span>
          </div>
        </div>
      </nav-bar>
      <div class="flex flex-col items-center justify-center">
        <img
          src="https://i.pravatar.cc/300"
          class="rounded-full h-32 w-32 my-3 object-center object-cover" alt="">
        <div class="py-3 text-center">
          <p class="font-semibold tracking-wide leading-snug text-gray-900 text-xl">Davis Wambugu</p>
          <p class="leading-snug text-davis-red text-gray-500">Nairobi, Kenya.</p>
          <p class="leading-snug text-sm text-gray-400">
            <span class="font-semibold text-gray-500">32</span> posts
          </p>
        </div>
        <div class="py-3 w-full flex justify-center">
          <button class="bg-davis-red text-white font-bold py-2 px-6 rounded">
            Profile
          </button>
        </div>
        <div class="py-3 w-full">
          <div class="flex items-center mb-2">
            <h1 class="text font-semibold text-gray-800">Favourites</h1>
          </div>
          <div class="flex flex-row flex-wrap">
            <img v-for="(collage, index) in collages" :key="index"
                 :src="'https://source.unsplash.com/featured/?' + collage"
                 class="rounded-lg h-12 w-12 my-1 object-center object-cover mr-2"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/Navbar'
  import SvgIcon from '@/components/SVG'

  export default {
    components: {
      NavBar,
      SvgIcon,
    },
    data: () => {
      return {
        collages: ['nature', 'animals', 'people', 'travel']
      }
    }
  }
</script>
