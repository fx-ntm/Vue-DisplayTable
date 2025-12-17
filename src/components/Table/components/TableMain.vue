<script setup lang="ts">
import type { TableColumn, TableData } from '../types/TableTypes';
import TableBody from './TableComponents/TableBody.vue';
import TableHeader from './TableComponents/TableHeader.vue';

const props = defineProps<{
    columns: TableColumn[];
    data: TableData[];
}>();
</script>

<template>
    <div class="dark:border-gray-600">
        <table class="w-full table-fixed bg-white dark:bg-black">
            <TableHeader :columns="props.columns" />
            <TableBody :data="props.data" :columns="props.columns" />
        </table>
    </div>
</template>
