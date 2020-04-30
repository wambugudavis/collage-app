<template>
  <div>
    <div class="flex mt-5 items-center justify-between">
      <h1 class="text-xl font-semibold text-davis-grey-dark">Add a new post</h1>
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
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Tags
          </label>
          <div class="relative">
            <select v-model="form.tags"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state" multiple>
              <option v-for="collage in collages" :key="collage.id" :value="collage.id">{{collage.title}}</option>
            </select>
            <p class="text-gray-600 text-xs italic">This will add your post to matching collages</p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end pt-4">
        <button
          class="bg-davis-grey-dark hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="submitForm"
        >
          Add Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'

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
      ...mapState('photos', ['collages'])
    },
    methods: {
      ...mapActions({
        fetchAllCollages: 'photos/fetchAllCollages'
      }),
      ...mapMutations({
        pushSavedPhoto: 'photos/pushSavedPhoto'
      }),

      async submitForm () {
        await this.$axios.$post('/api/photos', this.form)
          .then((response) => {
            this.pushSavedPhoto(response)
            this.$router.push('/photos/'+response.id)
          })
      }
    },
    mounted () {
      if (this.collages === null) {
        this.fetchAllCollages()
      }
    }
  }
</script>
