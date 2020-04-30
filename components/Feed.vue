<template>
  <div>
    <div class="flex mt-5 items-center justify-between">
      <h1 class="text-xl font-semibold text-davis-grey-dark">{{title}}</h1>
      <nuxt-link to="/photos">
        <p v-if="allOption" class="text-gray-500 p-2 cursor-pointer">View All</p>
      </nuxt-link>
    </div>
    <div v-if="photos !== null" class="flex flex-row flex-wrap justify-between">
      <div v-for="(photo, index) in photos" :key="index">
        <nuxt-link :to="`/photos/` + photo.id">
          <img :src="photo.url"
               class="transform hover:scale-115 transition ease-in duration-150 rounded-lg shadow-lg hover:shadow-none
             h-auto md:h-64 w-full md:w-64 mt-6 object-center object-cover mr-2"
               alt="">
        </nuxt-link>
        <div class="flex items-center mt-4 float-right">
          <div class="text-xs text-right">
            <p class="text-gray-800 leading-none">{{photo.user.username}}</p>
            <p class="text-gray-500">{{photo.created_at | formatDate}} ago</p>
          </div>
          <img class="w-8 h-8 rounded-full mx-4" :src="`https://i.pravatar.cc/100?img=` + index"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import moment from 'moment'

  export default {
    props: {
      photos: {
        type: Array,
        default: () => []
      },
      title: {
        type: String,
        default: 'Explore'
      },
      allOption: {
        type: Boolean,
        default: false
      }
    },
    filters: {
      formatDate (date) {
        return moment.duration(moment().diff(moment(date))).humanize()
      }
    }
  }
</script>

