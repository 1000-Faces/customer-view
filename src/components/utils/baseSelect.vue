<template>
  <div>
    <label :for="labelFor" class="text-gray-700 pt-3 font-medium text-sm" @click="onClickLabel">{{ label }}</label>
    <select :id="labelFor" v-model="modelValue" @change="onChange($event)" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from 'vue';
import { TSelect } from 'vue-tailwind';

const props = defineProps({
  modelValue: String,
  options: Array,
  label: String,
  labelFor: String
});

const emit = defineEmits(['update:modelValue']);

const { modelValue, options, label, labelFor } = toRefs(props);

const onChange = (event) => {
  emit('update:modelValue', event.target.value);
};

function onClickLabel() {
  input.value?.focus();
}
</script>
  
  