<script setup lang="ts">
import type { TableColumn, TableData } from '../types/TableTypes';
import TableBody from './TableComponents/TableBody.vue';
import TableHeader from './TableComponents/TableHeader.vue';
import { useSorting } from '../composables/useSorting';

const props = defineProps<{
    columns: TableColumn[];
    data: TableData[];
}>();

const { handleSort, sortedData, sortKey, sortDirection } = useSorting(props.data);
</script>

<template>
    <div class="dark:border-gray-600">
        <table class="w-full table-fixed bg-white dark:bg-black">
            <TableHeader 
                :columns="props.columns" 
                :sort-key="sortKey"
                :sort-direction="sortDirection"
                @sort="handleSort" 
            />
            <TableBody :data="sortedData" :columns="props.columns" />
        </table>
    </div>
</template>
