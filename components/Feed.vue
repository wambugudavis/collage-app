<template>
  <div>
    <div class="flex mt-4 items-center justify-between">
      <h1 class="text-xl font-semibold text-davis-grey-dark">Recent Posts</h1>
      <p class="text-gray-500 p-2 cursor-pointer">View All</p>
    </div>
    <div class="flex flex-row flex-wrap justify-between">
      <img v-for="(collage, index) in collages" :key="index"
           :src="'https://source.unsplash.com/featured/?' + collage"
           class="transform hover:scale-115 transition ease-in duration-150 rounded-lg shadow-lg h-64 w-64 my-6 object-center object-cover mr-2"
           alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        collages: ['nature', 'animals', 'people', 'travel', 'cars', 'food', 'song', 'africa', 'technology']
      }
    }
  }
</script>
