<template>
  <div class="flex flex-row flex-wrap -mx-2 mt-2">
    <div v-for="(collage, index) in collages" :key="index">
      <nuxt-link :to="`/collages/` + collage.id">
        <div
          class="flex flex-row items-center rounded bg-davis-grey-dark mx-2 my-1 py-1 px-2 text-white cursor-pointer">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
               viewBox="0 0 24 24" class="h-4 w-4 mx-1">
            <path
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          {{collage.title}}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      collages: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
