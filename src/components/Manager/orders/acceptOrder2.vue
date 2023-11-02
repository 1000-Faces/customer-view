<style>
    @import '@/assets/main.css';
</style>

<template>
    <div>
        <navbar/>
    </div>
    <div class="ml-40 mr-100 my-10 mt-20">
        <div class="flex flex-row">
            <div class="basis-2/5 mr-5 rounded-md p-2">
                <div class="flex flex-col items-center justify-center bg-white rounded-md p-2 shadow-md">
                    <div class="text-5xl text-primary font-semibold mb-0 justify-items-center">{{currentTime}}</div>
                    <div class="text-l text-primary tracking-wide">{{currentDate}}</div>
                </div>
                <div class="bg-white rounded-md p-2 my-2 font-bold shadow-md">
                    Orders Queue
                    <ul class="overflow-y-scroll h-3/5 pr-4">
                        <li v-for="(reserve, index) in reserves" :key="reserve.id">
                            
                            <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white ease-in-out hover:bg-lyellow cursor-pointer" 
                            @click="toggleActive()"
                            >
                                <div class="w-20 h-15 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-2xl">{{reserve.tableNo}}</div>
                                <div class="flex flex-col pl-3 text-sm gap-0.5">
                                    <div class="p-0 font-bold">Order No: {{reserve.orderNo}}</div>
                                    <div class="p-0">Chicken Rice & Curry, Sprite (Regular), Ice Cream 1 scp... see more</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="basis-3/5 ml-4 pr-80">
                <div class="flex flex-row">
                    <div class="basis-2/3">
                        <div class="flex flex-row text-4xl p-2"><div class="">Order No:</div><div class="pl-4 font-bold">1908</div></div>
                        <div class="flex flex-row text-l pl-2"><div class="">Ordered at</div><div class="pl-4 font-bold">09:07PM</div></div>
                        <div class="flex flex-row text-l pl-2"><div class="">Ordered by:</div><div class="pl-4 font-bold">{{reserves[3].custName}}</div></div>
                    </div>
                    <div class="basis-1/3">
                        <div class="bg-green m-2 h-20 w-20 rounded-lg p-5 text-3xl font-bold text-white">02</div>
                    </div>
                </div>
                <div class="pl-2 pt-10 pb-5 font-bold ">Items Ordered:</div>
                <div class="flex flex-row">
                    <div class="basis-2/3">
                        <ul class="list-disc pl-6">
                            <li class="mb-2">Chicken Rice and Curry (Large)</li>
                            <li class="mb-2">Beef Kottu (Large)</li>
                            <li class="mb-2">Sprite (Regular)</li>
                            <li class="mb-2">Vanilla Ice Cream (1Scp)</li>
                            <li class="mb-2">Chocolate Fingers(5 pack)</li>
                        </ul>
                    </div>
                    <div class="basis-1/3">
                        <ul class="pl-6">
                            <li class="mb-2">x1</li>
                            <li class="mb-2">x1</li>
                            <li class="mb-2">x3</li>
                            <li class="mb-2">x3</li>
                            <li class="mb-2">x1</li>
                        </ul>
                    </div>
                </div>
                <div class="pl-2 pt-10 pb-5 font-bold ">Notes:</div>
                <ul class="list-disc pl-6">
                    <li class="mb-2">Please add some more Spices and toothpicks with the food.</li>
                </ul>

                <div class="mt-10 px-15">
                    <button :class="{ 'w-80 bg-white text-primary border border-1 border-primary rounded-md px-2 py-2 font-bold': isClicked, 'w-80 bg-second text-white rounded-md px-2 py-2 font-bold': !isClicked }" @click="toggleColor()">
                        {{ buttonText }}
                    </button>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import navbar from '../../NavBar/MgNavBar.vue';

import { defineComponent } from 'vue';

//import OrderDetails from './OrderDetails.vue'


    export default defineComponent({
        name: 'order1',
        components: {
            navbar,
        },
        data() {
            return {
                //title: 'Dashboard | Manager',
                currentTime: "",
                currentDate: "",
                currentDay: "",
                currentMonth: "",
                isClicked: false,
                buttonText: "Accept",
                
                reserves: [
                    { id: 1, orderNo:1907, tableNo: '04', custName: 'Bimsara Wickramarathne', startEnd: '08.00PM - 10.00PM'},
                    { id: 2, orderNo:1908, tableNo: '10', custName: 'Vinoli Rubasinghe', startEnd: '09.00PM - 11.00PM'},
                    { id: 3, orderNo:1909, tableNo: '09', custName: 'John Doe', startEnd: '10.00PM - 12.00AM'},
                    { id: 4, orderNo:1910, tableNo: '06', custName: 'John Smith', startEnd: '10.00PM - 12.00AM'},
                    { id: 5, orderNo:1911, tableNo: '03', custName: 'Uthpalani Jayasinghe', startEnd: '10.00PM - 12.00AM'},
                    // Add more items here...
                ],
                //selectedOrderIndex: null,
                
                
            };
        },
        created() {
            this.getCurrentDateTime();
            setInterval(this.getCurrentDateTime, 1000); // Update every 1 second (1000 ms)
        },
        methods: {
            getCurrentDateTime() {
            const date = new Date();
            
            // Get the current date and time in text format
            this.currentDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
            this.currentTime = date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                //second: 'numeric',
                hour12: true,
            });
            
            // Get the current day and month separately
            this.currentDay = date.toLocaleDateString('en-US', { weekday: 'long' });
            this.currentMonth = date.toLocaleDateString('en-US', { month: 'long' });
            },

            toggleColor() {
                this.isClicked = !this.isClicked;
                this.buttonText = this.isClicked ? 'Accepted' : 'Accept';

            },
            toggleActive() {
                if (this.isClicked) {
                    this.$router.push({ name: 'order1' });
                }
            },
            
        }
    });
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>