<script setup lang="ts">
import type { TableColumn } from "../../types/TableTypes";

const props = defineProps<{
  data?: string | number | null;
  column: TableColumn;
}>();
</script>

<template>
  <td class="text-left text-md dark:text-white relative pr-12">
    <div class="relative">
        <p>{{ props.data }}</p>
      <div
        class="absolute top-0 right-0 bottom-0 w-16"
      ></div>
    </div>
  </td>
</template>
