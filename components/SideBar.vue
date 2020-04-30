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
          <p class="font-semibold tracking-wide leading-snug text-gray-900 text-xl">{{ $auth.user.username}}</p>
          <p class="leading-snug text-davis-red text-gray-500">{{$auth.user.city}}, {{$auth.user.location}}.</p>
          <p class="leading-snug text-sm text-gray-400">
            <span class="font-semibold text-gray-500">{{userPhotosCount}}</span>
          </p>
        </div>
        <div v-if="$auth.loggedIn" class="py-3 w-full flex justify-center">
          <button class="bg-davis-red text-white font-semibold py-2 px-6 rounded"
                  @click="logout()"
          >
            Log Out
          </button>
        </div>
        <div class="py-3 w-full">
          <div class="flex items-center mb-2">
            <h1 class="text font-semibold text-gray-800">Favourite collages</h1>
          </div>
          <tags :collages="userCollages"/>
        </div>
        <div class="py-3 w-full">
          <div class="flex items-center mb-2">
            <h1 class="text font-semibold text-gray-800">Last posted</h1>
          </div>
          <div class="flex flex-row flex-wrap">
            <div v-for="(photo, index) in userPhotos" :key="index">
              <nuxt-link :to="`/photos/` + photo.id">
                <img
                     :src="photo.url"
                     class="rounded-lg h-12 w-12 my-1 object-center object-cover mr-2"
                     alt="">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import NavBar from '../components/Navbar'
  import SvgIcon from '../components/SVG'
  import Tags from '../components/Tags'

  export default {
    components: {
      NavBar,
      SvgIcon,
      Tags
    },
    computed: {
      ...mapState('photos', ['userPhotos', 'userCollages']),
      userPhotosCount(){
        if(this.userPhotos !== null){
          return this.userPhotos.length + ' posts'
        } else {
          return 'No posts'
        }
      }
    },
    methods: {
      ...mapActions({
        fetchUserPhotos: 'photos/fetchUserPhotos'
      }),
      logout(){
        this.$auth.logout()
        window.location.replace('/login')
      }
    },
    mounted () {
      if (this.userPhotos === null) {
        this.fetchUserPhotos()
      }
    }
  }
</script>
