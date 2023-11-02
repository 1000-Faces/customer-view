<template>
  <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-lg font-semibold mb-4">Reserve Table {{ tableNumber }}</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="date" class="block font-medium text-gray-700">Date: {{ reservation.date }}</label>
        </div>
        <div class="mb-4">
          <label for="time" class="block font-medium text-gray-700">Time: {{ reservation.selectedTime }}</label>
        </div>
        <div class="mb-4">
          <label for="people" class="block font-medium text-gray-700">Number of People: {{ reservation.people }}</label>
        </div>
        <div class="mt-4 flex justify-end">
          <button @click="closeForm" class="bg-red text-white py-2 px-4 rounded mr-2">Cancel</button>
          <button type="submit" class="bg-green text-white py-2 px-4 rounded">Confirm</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import router from '@/main';

export default defineComponent({
  props: {
    tableNumber: Number,
    onClose: Function,
  },
  setup(props) {
    const reservation = ref({
      date: '',
      selectedTime: '',
      people: '',
      id: '',
      userId:'',
      tableNo: props.tableNumber
    });
    const showForm = ref(true);

    axios.get('http://localhost:3000/reservation')
      .then((response) => {
        // Sort the reservations data by ID in descending order
        const sortedReservations = response.data.sort((a, b) => b.id - a.id);

        // Get the last reservation from the sorted list
        const lastReservation = sortedReservations[0];

        reservation.value.date = lastReservation.date;
        reservation.value.selectedTime = lastReservation.selectedTime;
        reservation.value.people = lastReservation.people;
        reservation.value.id = lastReservation.id;
        reservation.value.userId = lastReservation.userId;

        showForm.value = true;
      })
      .catch((error) => {
        window.alert(error);
      });

    const closeForm = () => {
      showForm.value = false;
      window.location.reload();
    };

    const submitForm = () => {
      axios.post('http://localhost:3000/confirmed_reservation', reservation.value)
        .then((response) => {
          window.alert('Reservation confirmed.');
          const checkoutUrl = 'https://checkout.stripe.com/c/pay/cs_test_a1oT40Ll5lYvG5ywQWsZ81VbSqYmjxreZj6WYqmSjVXTkwVnsmYX704bff#fidkdWxOYHwnPyd1blpxYHZxWjA0S3RnTVZWQV9JNDI8VVM1fXVDTlBjNmN2UnwyRkRmQzEzQGhvM2xEbFBvPVAwYWZ0fHVfR2NLcE52MmJXTVNXTDNnczFkd3JsYUJVSnx%2FfVNRS1RLPF9XNTVkd2BMdlZkcicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl ';
          window.open(checkoutUrl, '_blank');
        })
        .catch((error) => {
          window.alert(error);
        });
    };

    return {
      showForm,
      reservation,
      closeForm,
      submitForm
    };
  },
});
</script>
