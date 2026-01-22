<script setup lang="ts">
import type { TableColumn, TableData } from '../../types/TableTypes';
import TableRow from './TableRow.vue';

const props = defineProps<{
    data: TableData[] | undefined;
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
        >
            <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
                <slot :name="slotName" v-bind="slotProps" />
            </template>
        </TableRow>
    </tbody>
</template>
