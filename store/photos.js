export const state = () => ({
  photos: null,
  collages: null,
  userPhotos: null,
  userCollages: null,
  highlight: null
})

export const actions = {
  async fetchAllPhotos ({ commit }) {
    await this.$axios.$get('/api/photos')
      .then((response) => {
        commit('savePhotos', response)
      }).catch((error) => {
        console.log(error)
      })
  },

  async fetchAllCollages ({ commit }) {
    await this.$axios.$get('/api/collages')
      .then((response) => {
        commit('saveCollages', response)
      }).catch((error) => {
        console.log(error)
      })
  },

  async fetchUserPhotos ({ commit }) {
    await this.$axios.$get('/api/photos/user')
      .then((response) => {
        commit('saveUserPhotos', response)

        const collages = []
        response.map((photo) => {
          return photo.collages.map((collage) => {
            const index = collages.findIndex((item) => {
              return item.id === collage.id
            })

            if (index === -1) {
              delete collage.pivot
              collages.push(collage)
            }
          })
        })
        commit('saveUserCollages', collages.slice(0, 3))
      }).catch((error) => {
        console.log(error)
      })
  },

  async fetchHighlightPhoto ({ commit }) {
    await this.$axios.$get('/api/photos/highlight')
      .then((response) => {
        commit('saveHighlightPhoto', response)
      }).catch((error) => {
        console.log(error)
      })
  }
}

export const mutations = {
  savePhotos (state, photos) {
    state.photos = photos.reverse()
  },

  pushSavedPhoto (state, photo) {
    if (state.photos !== null) {
      state.photos.unshift(photo)
    }

    if (state.userPhotos !== null) {
      state.userPhotos.unshift(photo)
    }
  },

  pushUpdatedPhoto (state, photo) {
    if (state.photos !== null) {
      state.photos = [
        ...state.photos.filter(item => item.id !== photo.id),
        photo
      ]
    }

    if (state.userPhotos !== null) {
      state.userPhotos = [
        ...state.userPhotos.filter(item => item.id !== photo.id),
        photo
      ]
    }
  },

  removePhoto (state, photoId) {
    if (state.photos !== null) {
      const photosIndex = state.photos.findIndex((photo) => {
        return photo.id.toString() === photoId
      })
      if (photosIndex !== -1) {
        state.photos.splice(photosIndex, 1)
      }
    }

    if (state.userPhotos !== null) {
      const userPhotosIndex = state.userPhotos.findIndex((photo) => {
        return photo.id.toString() === photoId
      })

      if (userPhotosIndex !== -1) {
        state.userPhotos.splice(userPhotosIndex, 1)
      }
    }
  },

  saveCollages (state, collages) {
    state.collages = collages
  },

  saveUserPhotos (state, photos) {
    state.userPhotos = photos.reverse()
  },

  saveUserCollages (state, collages) {
    state.userCollages = collages
  },

  saveHighlightPhoto (state, photo) {
    state.highlight = photo
  }
}
