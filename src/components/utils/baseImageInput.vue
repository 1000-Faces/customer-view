
  <script setup lang="ts">
  import { defineProps, defineEmits, toRefs } from 'vue';
  
  // Props
  const props = defineProps({
    modelValue: String,
    label: String,
    labelFor: String
  });
  
  // Emits
  const emit = defineEmits(['update:modelValue']);
  
  const { label, labelFor } = toRefs(props);
  
  const onChange = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.addEventListener('load', () => {
      emit('update:modelValue', fileReader.result);
    });
  };
  function onClickLabel() {
    input.value?.focus();
  }
  </script>
<template>
  <div>
    <label 
      :for="labelFor" 
      class="block text-gray-700 font-medium text-sm pt-3"
      @click="onClickLabel"
    >
      {{ label }}
    </label>
    <input 
      type="file" 
      :id="labelFor" 
      @change="onChange($event)"
      class="w-full bg-white text-gray-700 border-2 border-lgray rounded-md py-2 px-3 mt-1 text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
    />
  </div>
</template>

  
  
