<template>
  <div>
    <div class="flex mt-4 items-center justify-between">
      <h1 class="text-xl font-semibold text-davis-grey-dark">Highlight</h1>
    </div>
    <div v-if="highlight !== null" class="max-w-sm w-full lg:max-w-full lg:flex my-6">
      <div
        class="h-56 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        :style="`background-image: url(` + highlight.url + `)`" title="Woman holding a mug">
      </div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                 viewBox="0 0 24 24" class="h-4 w-4 text-gray-500 mr-1">
              <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            Post of the Day
          </p>
          <div class="text-davis-red font-semibold text-xl mb-2">{{highlight.title}}</div>
          <p class="text-gray-700 text-base">{{highlight.description}}</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://i.pravatar.cc/100">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">{{highlight.user.username}}</p>
            <p class="text-davis-red">{{highlight.created_at | formatDate}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import moment from 'moment'

  export default {
    computed: {
      ...mapState('photos', ['highlight'])
    },
    methods: {
      ...mapActions({
        fetchHighlightPhoto: 'photos/fetchHighlightPhoto'
      })
    },
    filters: {
      formatDate (date) {
        return moment(date).format('MMM DD')
      }
    },
    mounted () {
      if (this.highlight === null) {
        this.fetchHighlightPhoto()
      }
    }
  }
</script>
