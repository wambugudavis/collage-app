<template>
  <div class="relative -mx-10 -my-4">
    <div v-if="photo !== null" class="h-screen gradient-overlay">
      <img :src="photo.url" alt="" class="shadow-inner object-center object-cover h-full w-full">
      <div class="absolute top-0 left-0 bottom-0 right-0 h-full w-full text-white z-10">
        <div class="float-right px-6">
          <tags :collages="photo.collages"/>
        </div>
        <div class="flex h-full items-end pb-3 px-6">
          <div class="flex flex-col w-full">
            <div class="flex items-center">
              <p class="font-semibold text-3xl mr-4">{{photo.title}}</p>
              <img class="w-10 h-10 rounded-full mx-4" :src="`https://i.pravatar.cc/100?img=` + index"
                   alt="">
              <div class="">
                <p class="leading-none">{{photo.user.username}}</p>
                <p class="text-xs text-gray-200">{{photo.created_at | formatDate}} ago</p>
              </div>
              <div v-if="ownPost" class="flex flex-1 justify-end">
                <div
                  class="flex flex-row items-center rounded bg-white text-davis-grey-dark mx-2 my-1 py-1 px-2 font-semibold cursor-pointer"
                  @click="deletePhoto(photo)"
                >
                  Delete Post
                </div>
                <div
                  class="flex flex-row items-center rounded bg-white text-davis-grey-dark mx-2 my-1 py-1 px-2 font-semibold cursor-pointer"
                  @click="editPhoto(photo)"
                >
                  Edit
                </div>
              </div>
            </div>
            <div class="py-2 font-thin">{{photo.description}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import moment from 'moment'
  import Tags from '../../components/Tags'

  export default {
    components: {
      Tags
    },
    data: () => {
      return {
        fetchedPhoto: null
      }
    },
    computed: {
      ...mapState('photos', ['photos']),
      photo () {
        if (this.photos !== null) {
          return this.photos.find((photo) => {
            return photo.id.toString() === this.$route.params.id
          })
        }
        return this.fetchedPhoto
      },

      ownPost () {
        return this.$auth.user.id === this.photo.user.id;
      }
    },
    methods: {
      ...mapMutations({
        removePhoto: 'photos/removePhoto'
      }),

      async fetchPhoto () {
        this.fetchedPhoto = await this.$axios.$get('/api/photos/' + this.$route.params.id)
      },

      async deletePhoto () {
        await this.$axios.$delete('/api/photos/' + this.$route.params.id).then(() => {
          this.removePhoto(this.$route.params.id)
          this.$router.push('/photos')
        })
      },

      editPhoto(){
        this.$router.push('/photos/edit/' + this.$route.params.id)
      }
    },
    filters: {
      formatDate (date) {
        return moment.duration(moment().diff(moment(date))).humanize()
      }
    },
    mounted () {
      if (this.photos === null) {
        this.fetchPhoto()
      }
    }
  }
</script>

<style>
  .gradient-overlay:after {
    content: '';
    position: absolute;
    margin-right: -2rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 1, 64, 1) 25%, rgba(10, 1, 64, 1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 1, 64, 1) 25%, rgba(10, 1, 64, 1) 100%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgb(69, 67, 96) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#0a0140", GradientType=1);
  }
</style>
