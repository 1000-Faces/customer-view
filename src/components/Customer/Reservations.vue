<template>
  <div>
    <NavBar />

    <div class="bg-lgreen">
      <div class="page-content py-10 my-20 flex flex-col items-center">
        <div class="heading py-5 text-primary">
          <h2 class="text-xl">Reserve your favorite date</h2>
        </div>
        <!-- 1st table set -->
        <div class="floor-plan flex flex-col justify-center w-1/2 ">
          <div class="tabletype1 flex flex-row px-5 py-2 justify-evenly">
            <svg
              v-for="(table, index) in tablesSet1"
              :key="'set1-' + index"
              @click="tableClicked(index, 'set1')"
              :class="tableCursorClass(table)"
              class="table-svg px-2"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
            >
              <rect x="11" y="11" width="68" height="68" rx="9" :fill="table.fill" stroke="white" stroke-width="2" />
              <circle cx="10" cy="45" r="9" :fill="table.fill" stroke="white" stroke-width="2" />
              <circle cx="45" cy="10" r="9" :fill="table.fill" stroke="white" stroke-width="2" />
              <circle cx="80" cy="45" r="9" :fill="table.fill" stroke="white" stroke-width="2" />
              <circle cx="45" cy="80" r="9" :fill="table.fill" stroke="white" stroke-width="2" />
            </svg>
          </div>
        </div>
        <!-- 2nd table set -->
        <div class="floor-plan flex flex-col justify-center w-1/2 ">
          <div class="tabletype2 flex flex-row px-5 py-2 justify-evenly">
              <svg
                v-for="(table, index) in tablesSet2"
                :key="'set2-' + index"
                @click="tableClicked(index, 'set2')"
                :class="tableCursorClass(table)"
                class="table-svg px-2"
                width="160"
                height="90"
                viewBox="0 0 160 90"
                fill="none"
              >
              <rect x="11" y="79" width="68" height="138" rx="9" transform="rotate(-90 11 79)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="45" cy="80" r="9" transform="rotate(-90 45 80)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="10" cy="45" r="9" transform="rotate(-90 10 45)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="45" cy="10" r="9" transform="rotate(-90 45 10)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="45" cy="10" r="9" transform="rotate(-90 45 10)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="115" cy="80" r="9" transform="rotate(-90 115 80)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="115" cy="10" r="9" transform="rotate(-90 115 10)" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="150" cy="45" r="9" transform="rotate(-90 150 45)" :fill="table.fill" stroke="white" stroke-width="2"/>
              </svg>
          </div>
        </div>
        <!-- 3rd table set -->
        <div class="floor-plan flex flex-col justify-center w-1/2 ">
          <div class="tabletype3 flex flex-row px-5 py-2 justify-evenly">
              <svg
                v-for="(table, index) in tablesSet3"
                :key="'set3-' + index"
                @click="tableClicked(index, 'set3')"
                :class="tableCursorClass(table)"
                class="table-svg px-2"
                width="65"
                height="70"
                viewBox="0 0 65 70"
                fill="none"
              >
              <rect x="11" y="1" width="43" height="68" rx="9" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="10" cy="35" r="9" :fill="table.fill" stroke="white" stroke-width="2"/>
              <circle cx="55" cy="35" r="9" :fill="table.fill" stroke="white" stroke-width="2"/>
              </svg>
          </div>
        </div>
        <div class="color-codes py-10">
          <div class="flex flex-row">
            <div class="flex flex-row items-center">
              <div class="w-5 h-5 bg-green rounded-full mr-2"></div>
              <div>Available</div>
            </div>
            <div class="flex flex-row items-center ml-4">
              <div class="w-5 h-5 bg-red rounded-full mr-2"></div>
              <div>Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReservationForm v-if="showForm" :tableNumber="selectedTable" @closeForm="closeForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../utils/navBar-user.vue';
import ReservationForm from './ReservationForm.vue'; 

export default defineComponent({
  components: {
    NavBar,
    ReservationForm,
  },
  data() {
    return {
      title: 'Reservations | Customer',
      selectedTable: null,
      showForm: false,
      tablesSet1: [
        { id: 1, selected: false, booked: false, fill: '#C6C6C6' },
        { id: 2, selected: false, booked: true, fill: 'red' },
        { id: 3, selected: false, booked: false, fill: '#C6C6C6' },
        { id: 4, selected: false, booked: false, fill: '#C6C6C6' },
        // Add more table objects as needed
      ],
      tablesSet2: [
        { id: 101, selected: false, booked: false, fill: '#C6C6C6' },
        { id: 102, selected: false, booked: false, fill: '#C6C6C6' },
        { id: 103, selected: false, booked: true, fill: 'red' },
        // Add more table objects for set 2 as needed
      ],
      tablesSet3: [
        { id: 201, selected: false, booked: false, fill: 'red' },
        { id: 202, selected: false, booked: false, fill: '#C6C6C6' },
        { id: 203, selected: false, booked: true, fill: 'red' },
        { id: 204, selected: false, booked: true, fill: 'red' },
        { id: 205, selected: false, booked: false, fill: '#C6C6C6' },
        { id: 206, selected: false, booked: true, fill: 'red' },
        // Add more table objects for set 2 as needed
      ],
    };
  },
  methods: {
    tableClicked(index: number, tableSet: string) {
      let table;
      switch (tableSet) {
        case 'set1':
          table = this.tablesSet1[index];
          break;
        case 'set2':
          table = this.tablesSet2[index];
          break;
        case 'set3':
          table = this.tablesSet3[index];
          break;
        default:
          console.error('Invalid tableSet:', tableSet);
          return;
      }

      if (!table.booked) {
        table.selected = !table.selected;
        table.fill = table.selected ? 'green' : '#C6C6C6';

        if (!table.selected) {
          this.closeForm();
        } else {
          this.selectedTable = table.id;

          // Open the form when a table is selected
          this.showForm = true;
        }
      }
    },
    closeForm() {
      this.selectedTable = null;
      this.showForm = false;
    },
    tableCursorClass(table) {
      return {
        'table-svg': true,
        'cursor-pointer': !table.booked,
        'cursor-not-allowed': table.booked,
      };
    },
  },
});
</script>
