<script setup lang="ts">
import TableHeaderCell from "./TableHeaderCell.vue";
import type { TableColumn } from "../../types/TableTypes";

const props = defineProps<{
  columns: TableColumn[];
}>();
</script>

<template>
  <thead class="sticky top-0 z-3 bg-white dark:bg-black">
    <tr class="border-b-2 border-black dark:border-white">
      <TableHeaderCell
        v-for="column in props.columns"
        :key="column.key"
        :title="column.label"
        :column="column"
      />
    </tr>
  </thead>
</template>
