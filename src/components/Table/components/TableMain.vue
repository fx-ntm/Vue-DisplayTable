<script setup lang="ts">
import type { TableColumn, TableData } from '../types/TableTypes';
import TableBody from './TableComponents/TableBody.vue';
import TableHeader from './TableComponents/TableHeader.vue';
import { useSorting } from '../composables/useSorting';

interface Props {
    columns: TableColumn[];
    data?: TableData[];
    emptyMessage?: string;
}
const props = withDefaults(defineProps<Props>(), {
    emptyMessage: 'No data is available :('
});
const { handleSort, sortedData, sortKey, sortDirection } = useSorting(props.data);
</script>

<template>
    <div class="dark:border-gray-600">
        <table class="w-full table-fixed bg-white dark:bg-black">
            <TableHeader v-if="props.data && props.data.length != 0"
                :columns="props.columns" 
                :sort-key="sortKey"
                :sort-direction="sortDirection"
                @sort="handleSort" 
            />
            <TableBody v-if="props.data && props.data.length != 0" :data="sortedData" :columns="props.columns" />
            <p v-else>{{ props.emptyMessage }}</p>
        </table>
    </div>
</template>
