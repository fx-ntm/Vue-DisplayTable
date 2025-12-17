<script setup lang="ts">
import type { TableColumn, TableData } from '../../types/TableTypes';
import TableRow from './TableRow.vue';

const props = defineProps<{
    data: TableData[];
    columns: TableColumn[];
}>();
</script>

<template>
    <tbody>
        <TableRow
            v-for="(row, index) in props.data"
            :key="`row-${index}`"
            :data="row"
            :columns="props.columns"
        />
    </tbody>
</template>
