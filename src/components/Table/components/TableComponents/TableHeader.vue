<script setup lang="ts">
import TableHeaderCell from './TableHeaderCell.vue';
import type { TableColumn, SortDirection } from '../../types/TableTypes';

const props = defineProps<{
    columns: TableColumn[];
    sortKey: string | null;
    sortDirection: SortDirection
}>();

const emit = defineEmits<{
    sort: [column: TableColumn]
}>();

const handleSort = (column: TableColumn) => {
    emit('sort', column);
};
</script>

<template>
    <thead class="sticky top-0 z-3 bg-white dark:bg-black">
        <tr class="border-b-2 border-black dark:border-white">
            <TableHeaderCell
                v-for="column in props.columns"
                :key="column.key"
                :title="column.label"
                :column="column"
                :is-sorted="sortKey === column.key"
                :sort-direction="sortKey === column.key ? sortDirection : null"
                :class="[column.sortable ? 'hover:cursor-pointer' : '']"
                @sort="handleSort"
            />
        </tr>
    </thead>
</template>
