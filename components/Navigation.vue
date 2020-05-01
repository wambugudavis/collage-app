<template>
  <div class="h-screen fixed flex justify-center w-24">
    <div class="py-6 px-3 flex flex-col">
      <div class="flex items-center" style="height: 70vh">
        <div>
          <div v-for="(link, index) in links" :key="index"
               class="h-10 w-10 my-8 rounded-full hover:text-white flex items-center justify-center"
               :class="{
                         'text-white': isLinkActive(link),
                         'text-gray-500': !isLinkActive(link)
                         }"
          >
            <div v-if="isLinkActive(link)" class="absolute left-0">
              <div class="h-12 bg-white rounded-br-lg rounded-tr-lg" style="width: 0.35rem"></div>
            </div>
            <nuxt-link :to="link.path">
              <svg-icon
                :name="link.icon"
                class="stroke-current"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-end">
        <div
          class="h-10 w-10 my-8 rounded-full text-gray-500 hover:text-white hover:shadow-teal-love hover:bg-gradient-teal-love flex items-center justify-center">
          <div class="relative">
            <svg-icon
              name="Cog"
              class="stroke-current"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SvgIcon from '@/components/SVG'

  export default {
    data: () => {
      return {
        links: [
          {
            icon: 'Home',
            path: '/'
          },
          {
            icon: 'Plus',
            path: '/photos/add'
          },
          {
            icon: 'List',
            path: '/photos'
          }
        ]
      }
    },
    components: {
      SvgIcon
    },
    methods: {
      isLinkActive (link) {
        return this.$route.fullPath === link.path
      }
    }
  }
</script>
