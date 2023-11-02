<template>
    <div class="bg-gray-100 min-h-screen p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-semibold mb-4">Sales Analytics Dashboard</h1>
        
        <!-- Chart Section -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Sales Overview</h2>
          <line-chart :data="chartData" :options="chartOptions" />
        </div>
  
        <!-- Table Section -->
        <div class="mt-6">
          <h2 class="text-xl font-semibold mb-2">Top Selling Products</h2>
          <table class="w-full border border-gray-300 rounded-lg">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-3 text-left">Product</th>
                <th class="p-3 text-left">Quantity Sold</th>
                <th class="p-3 text-left">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in topProducts" :key="index">
                <td class="p-3">{{ product.name }}</td>
                <td class="p-3">{{ product.quantity }}</td>
                <td class="p-3">{{ product.revenue }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  //import { Line } from 'vue3-chart-v2';
  
  export default defineComponent({
    components: {
      LineChart: Line,
    },
    data() {
      return {
        chartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Sales',
              data: [120, 200, 150, 300, 250],
              backgroundColor: 'rgba(41, 128, 185, 0.2)',
              borderColor: 'rgba(41, 128, 185, 1)',
              borderWidth: 1,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
        topProducts: [
          { name: 'Product A', quantity: 200, revenue: '$4000' },
          { name: 'Product B', quantity: 150, revenue: '$3000' },
          { name: 'Product C', quantity: 120, revenue: '$2400' },
          { name: 'Product D', quantity: 90, revenue: '$1800' },
          { name: 'Product E', quantity: 70, revenue: '$1400' },
        ],
      };
    },
  });
  </script>
  
  <style>
  /* You can add any custom styles here */
  </style>
  