<template>
    <div class="flex flex-row -mx-3">
        <div v-for="(card, index) in cards" :key="index"
             class="group flex-1 m-3 shadow-md rounded-lg bg-white transform hover:scale-115 transition ease-in duration-150"
             :class="`hover:bg-${card.class} hover:shadow-2xl z-50`"
        >
            <div class="p-4 h-full flex flex-col">
                <div class="flex flex-row items-center">
                    <div class="bg-davis-grey-dark group-hover:bg-white rounded-full h-8 w-8 p-2 flex items-center justify-center">
                        <svg-icon
                                :name="card.icon"
                                class="fill-current text-white group-hover:text-davis-grey-dark h-6"
                        />
                    </div>
                    <span class="text-davis-grey-dark group-hover:text-white ml-3 font-medium">{{card.label}}</span>
                </div>
                <div class="flex-1 flex items-center text-gray-400 group-hover:text-white">
                    <div class="flex flex-col text-xs my-4">
                        <div class="flex flex-row mb-2">
                            <svg-icon
                                    name="User"
                                    class="fill-current text-gray-400 group-hover:text-white h-4"
                            />
                            <span>5 members</span>
                        </div>
                        <div class="flex flex-row">
                            <svg-icon
                                    name="Notification"
                                    class="fill-current text-gray-400 group-hover:text-white h-4"
                            />
                            <span>15 Nov 2020</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <p class="float-right font-semibold text-davis-grey-dark group-hover:text-white text-sm">{{card.progress}}%</p>
                </div>
                <div class="h-5 flex items-center">
                    <span
                            class="rounded-full z-10 w-20"
                            style="height: 0.35rem"
                            :class="`bg-${card.class} group-hover:bg-white`"
                            :style="`width: ${card.progress}% `"
                    ></span>
                    <span class="bg-gray-100 group-hover:opacity-25 rounded-full flex-1 -ml-1" style="height: 0.35rem"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/SVG'

    export default {
        components: {
            SvgIcon
        },
        data: () => {
            return {
                cards: [
                    {
                        label: 'The Maptrix',
                        progress: '34',
                        class: 'davis-red',
                        icon: 'Graph'
                    },
                    {
                        label: 'Delivery Club',
                        progress: '78',
                        class: 'davis-purple',
                        icon: 'Notification'
                    },
                    {
                        label: 'Travel Comrade',
                        progress: '82',
                        class: 'davis-orange',
                        icon: 'TrendingUp'
                    },
                ]
            }
        }
    }
</script>
