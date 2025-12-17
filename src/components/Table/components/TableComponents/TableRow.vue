<script setup lang="ts">
import type { TableColumn, TableData } from '../../types/TableTypes';
import TableCell from './TableCell.vue';

const props = defineProps<{
    data: TableData;
    columns: TableColumn[];
}>();
</script>

<template>
    <tr
        class="border-b border-black hover:bg-gray-100 dark:border-white dark:hover:bg-slate-900"
    >
        <TableCell
            v-for="column in props.columns"
            :key="column.key"
            :data="props.data[column.key]"
            :column="column"
            :row-data="props.data"
        />
    </tr>
</template>
