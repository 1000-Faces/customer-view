<style>
    @import '@/assets/main.css';
</style>

<template>
    <!-- <div class="grid grid-rows-2"> -->
    <div class="">
        <navbar/>
    </div>
    
    <div class="grid xl:grid-cols-3 lg:grid-row-3 gap-4 p-4 mt-20">
        <div class="shadow p-4 rounded-lg">
        <div class="grid grid-cols-1 p-4 shadow rounded-lg bg-white">
            <div class="flex flex-col items-center justify-center">
                <div class="text-5xl text-primary font-semibold mb-0 justify-items-center">{{currentTime}}</div>
                <div class="text-l text-primary tracking-wide">{{currentDate}}</div>
            </div>
        </div>

        <div class="flex p">
            <div class="py-4 text-black font-bold">Reservation Shedule</div>
        </div>
            <ul class="min-h-screen h-2/10 pr-4">
                <li v-for="(reserve, index) in reserves" :key="reserve.id">
                    <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white">
                        <div class="w-20 h-20 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-4xl">{{reserve.tableNo}}</div>
                        <div class="flex flex-col pl-3 text-sm gap-0.5">
                            <div class="p-0">{{reserve.startEnd}}</div>
                            <div class="font-bold">{{reserve.custName}}</div>
                            <button :class="{ 'w-40 bg-white text-primary border border-1 border-primary rounded-md py-2 font-bold': !reserve.isClicked, 'w-40 bg-second text-white rounded-md py-2 font-bold': reserve.isClicked }" @click="toggleColor(index)">
                                {{ reserve.buttonText }}
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <button class="mt-4 w-full bg-primary text-white rounded-lg py-2" @click="goToResPage">
                View All Reservations
            </button>
        </div>
        <div class="shadow rounded-lg">
            <div class="shadow p-4 pt-1 rounded-lg">
            
            <div class="flex p">
                <div class="py-4 text-black font-bold">Accepted Orders</div>
            </div>
                <ul class="overflow-y-scroll h-3/5 pr-4">
                    <li v-for="(order, index) in ordersWithPrice" :key="order.id">
                        <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white">
                            <div class="w-20 h-20 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-4xl">{{order.tableNo}}</div>
                            <div class="flex flex-col pl-3 text-sm gap-0.5">
                                <div class="flex flex-row"><div class="p-0 font-bold">Order ID:</div> <div class="pl-2">{{order.id}}</div></div>
                                <div class="">{{order.custName}}</div>
                                <div class="flex flex-row"><div class="p-0 font-bold">FInal Price:</div> <div class="font-bold">{{order.price.toFixed(2)}}</div></div>
                                <button :class="{ 'w-40 bg-white text-primary border border-1 border-primary rounded-md py-2 font-bold': !order.isClicked, 'w-40 bg-second text-white rounded-md py-2 font-bold': order.isClicked }" @click="toggleColor1(index)">
                                    {{ order.buttonText }}
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <button class="mt-4 w-full bg-primary text-white rounded-lg py-2" @click="goToFullPage">
                    View all Accepted orders
                </button>
            </div>
        </div>
        <div class="shadow rounded-lg">
            <div class="shadow p-4 pt-1 rounded-lg">
            
            <div class="flex p">
                <div class="py-4 text-black font-bold">Orders Queue</div>
            </div>
                <ul class="overflow-y-scroll h-3/5 pr-4">
                    <li v-for="(pending, index) in pendings" :key="pending.id">
                        <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white">
                            <div class="w-20 h-20 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-4xl">{{pending.tableNo}}</div>
                            <div class="flex flex-col pl-3 text-sm gap-0.5">
                                <div class="flex flex-row"><div class="p-0 font-bold">Order ID:</div> <div class="pl-2">{{pending.id}}</div></div>
                                <div class="">{{pending.custName}}</div>
                                <button :class="{ 'w-40 bg-white text-primary border border-1 border-primary rounded-md py-2 font-bold': !pending.isClicked, 'w-40 bg-second text-white rounded-md py-2 font-bold': pending.isClicked }" @click="toggleColor2(index)">
                                    {{ pending.buttonText }}
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <button class="mt-4 w-full bg-primary text-white rounded-lg py-2" @click="goToOrderPage">
                    View orders queue
                </button>
            </div>
        </div>

    </div>
</template>
  
  



<script lang="ts">
import navbar from '../NavBar/MgNavBar.vue';
import { defineComponent } from 'vue';

    export default defineComponent({
        /* name: 'ManagerHome', */
        components: {navbar},
        data() {
            return {
                //title: 'Dashboard | Manager',
                currentTime: "",
                currentDate: "",
                currentDay: "",
                currentMonth: "",
                //isClicked: false,
                //buttonText: "Not Arrived",
                reserves: [
                    { id: 1, tableNo: '04', custName: 'Bimsara Wickramarathne', startEnd: '08.00PM - 10.00PM', isClicked: false, buttonText: 'Not Arrived' },
                    { id: 2, tableNo: '10', custName: 'Vinoli Rubasinghe', startEnd: '09.00PM - 11.00PM', isClicked: false, buttonText: 'Not Arrived'  },
                    { id: 3, tableNo: '09', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived'  },
                    { id: 4, tableNo: '06', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived'  },
                    { id: 5, tableNo: '03', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived'  },
                    // Add more items here...
                ],
                orders: [
                    { id: 5, tableNo: '03', custName: 'Alice Johnson', total: '$75', discount: '12%', isClicked: false, buttonText: 'Not Served' },
                    { id: 6, tableNo: '11', custName: 'Bob Smith', total: '$55', discount: '7%', isClicked: false, buttonText: 'Not Served' },
                    { id: 7, tableNo: '08', custName: 'Charlie Brown', total: '$90', discount: '20%', isClicked: false, buttonText: 'Not Served' },
                    { id: 8, tableNo: '02', custName: 'David Lee', total: '$70', discount: '10%', isClicked: false, buttonText: 'Not Served' },
                    { id: 9, tableNo: '07', custName: 'Ella Davis', total: '$45', discount: '6%', isClicked: false, buttonText: 'Not Served' },
                    { id: 10, tableNo: '05', custName: 'Frank Johnson', total: '$60', discount: '15%', isClicked: false, buttonText: 'Not Served' },
                    { id: 11, tableNo: '12', custName: 'Grace Smith', total: '$40', discount: '5%', isClicked: false, buttonText: 'Not Served' },
                    { id: 12, tableNo: '14', custName: 'Henry Brown', total: '$70', discount: '8%', isClicked: false, buttonText: 'Not Served' },
                    { id: 13, tableNo: '15', custName: 'Isabel Lee', total: '$85', discount: '12%', isClicked: false, buttonText: 'Not Served' },
                    { id: 14, tableNo: '16', custName: 'Jack Davis', total: '$55', discount: '7%', isClicked: false, buttonText: 'Not Served' }
                ],

                pendings: [
                    { id: 5, tableNo: '03', custName: 'Alice Johnson', total: '$75', discount: '12%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 6, tableNo: '11', custName: 'Bob Smith', total: '$55', discount: '7%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 7, tableNo: '08', custName: 'Charlie Brown', total: '$90', discount: '20%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 8, tableNo: '02', custName: 'David Lee', total: '$70', discount: '10%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 9, tableNo: '07', custName: 'Ella Davis', total: '$45', discount: '6%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 10, tableNo: '05', custName: 'Frank Johnson', total: '$60', discount: '15%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 11, tableNo: '12', custName: 'Grace Smith', total: '$40', discount: '5%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 12, tableNo: '14', custName: 'Henry Brown', total: '$70', discount: '8%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 13, tableNo: '15', custName: 'Isabel Lee', total: '$85', discount: '12%', isClicked: false, buttonText: 'Not Accepted' },
                    { id: 14, tableNo: '16', custName: 'Jack Davis', total: '$55', discount: '7%', isClicked: false, buttonText: 'Not Accepted' }
                ],


            };
        },
        computed: {
            ordersWithPrice() {
            return this.orders.map(order => ({
                ...order,
                price: this.calculatePrice(parseFloat(order.total.slice(1)), parseFloat(order.discount) / 100)
            }));
            }
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

            toggleColor(index: number) {
                this.reserves[index].isClicked = !this.reserves[index].isClicked;
                this.reserves[index].buttonText = this.reserves[index].isClicked ? 'Arrived' : 'Not Arrived';

                // Change the button text after the first click
                // if (this.isClicked) {
                //     this.buttonText = "Arrived";
                // } else {
                //     this.buttonText = "Not Arrived";
                // }

            },
            toggleColor1(index: number) {
                this.orders[index].isClicked = !this.orders[index].isClicked;
                this.orders[index].buttonText = this.orders[index].isClicked ? 'Served' : 'Not Served';
            },
            toggleColor2(index: number) {
                this.pendings[index].isClicked = !this.pendings[index].isClicked;
                this.pendings[index].buttonText = this.pendings[index].isClicked ? 'Accepted' : 'Not Accepted';
            },

            calculatePrice(total:any, discount:any) {
                return total - total * discount;
            },
            goToFullPage() {
                window.location.href = '/reservation/res-1';
            // Add your logic to redirect to the full page here
            // You can use the Vue Router or window.location.href
            },
            goToOrderPage() {
                window.location.href = '/accept/order-1';
            // Add your logic to redirect to the full page here
            // You can use the Vue Router or window.location.href
            },
        }
    });
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>

