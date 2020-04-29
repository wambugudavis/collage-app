<template>
  <div class="min-h-screen flex w-full text-sm text-left">
    <div class="w-full md:w-9/12 flex flex-row">
      <div class="flex justify-center w-24 hidden md:block relative bg-davis-grey-dark shadow">
        <nav-bar class="justify-center items-center">
          <p class="fixed text-white font-semibold tracking-wide text-lg">
            C<span class="font-light">ollage</span>
          </p>
        </nav-bar>
        <navigation/>
      </div>
      <div class="flex-1 md:w-11/12 py-4 px-6">
        <nav-bar>
          <p class="text-davis-grey-dark font-semibold text-2xl">Ongoing Projects</p>
        </nav-bar>
        <div class="flex flex-row pb-4">
          <div class="flex-1 flex flex-row">
            <span
              class="text-gray-500 hover:text-white py-2 px-4 mr-3 rounded-full hover:bg-davis-grey-dark cursor-pointer">All</span>
            <span class="text-white py-2 px-4 mr-3 rounded-full bg-davis-grey-dark cursor-pointer">Current</span>
            <span
              class="text-gray-500 hover:text-white py-2 px-4 mr-3 rounded-full hover:bg-davis-grey-dark cursor-pointer">Pending</span>
            <span
              class="text-gray-500 hover:text-white py-2 px-4 mr-3 rounded-full hover:bg-davis-grey-dark cursor-pointer">Completed</span>
          </div>
          <div class="ml-auto flex flex-row">
            <svg-icon
              name="Grid"
              class="fill-current text-gray-700 h-6 ml-4"
            />
            <svg-icon
              name="Menu"
              class="fill-current text-gray-400 hover:text-gray-700 h-6 ml-4"
            />
          </div>
        </div>
        <overview-cards/>
        <div class="flex flex-col py-4">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-lg font-semibold text-davis-grey-dark">Shared files</h1>
            <p class="text-gray-500 p-2 cursor-pointer">View All</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae magni quas sequi vitae? Assumenda,
            cumque, cupiditate eaque ipsum, minima natus nobis praesentium provident quasi repellendus similique
            temporibus veritatis vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto cum distinctio explicabo fuga
            harum laborum quis quos? Accusantium adipisci deserunt dicta dolores dolorum eius laborum omnis quos
            repellat similique!
          </div>
        </div>
        <div class="flex flex-col py-4">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-lg font-semibold text-davis-grey-dark">Projects Statistics</h1>
            <p class="text-gray-500 p-2 cursor-pointer">View All</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae magni quas sequi vitae? Assumenda,
            cumque, cupiditate eaque ipsum, minima natus nobis praesentium provident quasi repellendus similique
            temporibus veritatis vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto cum distinctio explicabo fuga
            harum laborum quis quos? Accusantium adipisci deserunt dicta dolores dolorum eius laborum omnis quos
            repellat similique!
          </div>
        </div>
      </div>
    </div>
    <div class="w-3/12 hidden md:block bg-gray-100 shadow py-4 px-6">
      <side-bar/>
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import NavBar from '../components/Navbar'
  import SideBar from '../components/SideBar'
  import OverviewCards from '../components/OverviewCards'
  import SvgIcon from '@/components/SVG'

  export default {
    components: {
      Navigation,
      NavBar,
      SvgIcon,
      OverviewCards,
      SideBar
    }
  }
</script>
