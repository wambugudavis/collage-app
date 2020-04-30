<template>
  <div>
    <highlight/>
    <feed :photos="recentPhotos" title="Recent Posts" :all-option="true"/>
    <div class="flex mt-6 items-center justify-between">
      <h1 class="text-xl font-semibold text-davis-grey-dark">Browse Collages</h1>
    </div>
    <tags :collages="collages"/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Highlight from '../components/Highlight'
  import Feed from '../components/Feed'
  import Tags from '../components/Tags'

  export default {
    components: {
      Feed,
      Highlight,
      Tags
    },
    computed: {
      ...mapState('photos', ['collages', 'photos']),

      recentPhotos () {
        if (this.photos !== null) {
          return this.photos.slice(0, 3)
        }
        return null
      }
    },
    methods: {
      ...mapActions({
        fetchAllPhotos: 'photos/fetchAllPhotos',
        fetchAllCollages: 'photos/fetchAllCollages'
      })
    },
    mounted () {
      if (this.collages === null) {
        this.fetchAllCollages()
      }

      if (this.photos === null) {
        this.fetchAllPhotos()
      }
    }
  }
</script>
