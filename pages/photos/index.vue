<template>
  <div>
    <feed :photos="photos"/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Feed from '../../components/Feed'

  export default {
    components: {
      Feed
    },
    computed: {
      ...mapState('photos', ['photos'])
    },
    methods: {
      ...mapActions({
        fetchAllPhotos: 'photos/fetchAllPhotos'
      })
    },
    mounted () {
      if (this.photos === null) {
        this.fetchAllPhotos()
      }
    }
  }
</script>
