<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean;
  outline?: boolean;
  danger?: boolean;
  warning?: boolean;
  flat?: boolean;
}>();
</script>

<template>
  <button
    class="flex justify-center border-2 border-green p-2 rounded"
    :class="[
      props.outline ? 'outlined' : '',
      props.danger ? 'danger' : '',
      props.warning ? 'warning' : '',
      props.flat ? 'flat' : '',
    ]"
  >
    <i-eos-icons-loading v-if="props.loading" />
    <span>
      <slot />
    </span>
  </button>
</template>

