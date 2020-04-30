<template>
  <div>
    <div class="flex mt-5 items-center justify-between">
      <h1 class="text-xl font-semibold text-davis-grey-dark">Edit</h1>
    </div>
    <form class="px-8 pt-6 pb-8 mb-4">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Title
          </label>
          <input
            v-model="form.title"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name" type="text" placeholder="Title">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            URL Link
          </label>
          <input
            v-model="form.url"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" type="text" placeholder="Link">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Description
          </label>
          <textarea
            v-model="form.description" rows="3"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-username" type="text" placeholder="Add a description"></textarea>
        </div>
      </div>
      <div class="flex items-center justify-end pt-4">
        <button
          class="bg-davis-grey-dark hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="submitForm"
        >
          Update Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => {
      return {
        form: {
          title: null,
          url: null,
          description: null,
          tags: []
        }
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
      }
    },
    methods: {
      ...mapMutations({
        pushUpdatedPhoto: 'photos/pushUpdatedPhoto'
      }),

      async fetchPhoto () {
        this.fetchedPhoto = await this.$axios.$get('/api/photos/' + this.$route.params.id)
        this.form = this.fetchedPhoto
      },

      async submitForm () {
        await this.$axios.$put('/api/photos/' + this.$route.params.id, this.form)
          .then((response) => {
            this.pushUpdatedPhoto(response)
            this.$router.push('/photos/' + response.id)
          })
      }
    },
    mounted () {
      if (this.photos === null) {
        this.fetchPhoto()
      } else {
        this.form = this.photo
      }
    }
  }
</script>
