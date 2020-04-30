<template>
  <div>
    <feed :photos="collage.photos" :title="collage.title"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Feed from '../../components/Feed'

  export default {
    components: {
      Feed
    },
    data: () => {
      return {
        fetchedCollage: {
          photos: null,
          title: null
        }
      }
    },
    computed: {
      ...mapState('photos', ['collages']),
      collage () {
        if (this.collages !== null) {
          return this.collages.find((collage) => {
            return collage.id.toString() === this.$route.params.id
          })
        }

        return this.fetchedCollage
      }
    },
    methods: {
      async fetchCollage () {
        this.fetchedCollage = await this.$axios.$get('/api/collages/' + this.$route.params.id)
      }
    },
    mounted () {
      if (this.collages === null) {
        this.fetchCollage()
      }
    }
  }
</script>
