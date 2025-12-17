<script setup lang="ts">
import type { TableColumn } from "../../types/TableTypes";
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  column: TableColumn;
}>();

const cellStyle = computed(() => {
    if (props.column.width) {
      return { width: props.column.width };
    }
    return {};
});
</script>

<template>
    <th :style="cellStyle" class="py-3 pr-3 font-bold text-left dark:text-white">
      {{ props.title }}
    </th>
</template>
