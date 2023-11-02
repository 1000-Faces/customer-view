<script setup lang="ts">
import {toRefs, ref } from 'vue';

  // Props
  const props = defineProps<{
  modelValue: string | number | undefined;
  label: string;
  labelFor: string;
  fixedLabel?: boolean;
  type?: string; // Add the 'type' prop
  
}>();


  //  Emits
  const emit = defineEmits<{
    (event: "update:modelValue", payload: string | number): void;
  }>();

  const { label, labelFor, modelValue, type } = toRefs(props);
  const input = ref<HTMLInputElement>();

  function onClickLabel() {
    input.value?.focus();
  }
</script>

<template>
  <label
      :for="labelFor"
      :class="['text-red-500', 'font-bold']"
      @click="onClickLabel"
      class="text-gray-700 pt-3 font-medium text-sm"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      ref="input"
      :value="modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="{
            'w-full border-lgray border-2 rounded-md p-1 hover:border-green focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent': true,
            'border-red': false && !$attrs
          }"

      :type="type"
    />
    <div class="icon">
      <slot name="icon" />
    </div>
  <!-- </div> -->
</template>