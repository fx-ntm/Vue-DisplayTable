<script setup lang="ts">
import type { TableColumn, TableData } from '../../types/TableTypes';

const props = defineProps<{
    data?: string | number | null;
    column: TableColumn;
    rowData?: TableData;
}>();
</script>

<template>
    <td class="text-left text-md dark:text-white relative pr-12">
        <div class="relative">
            <slot :name="`cell-${column.key}`" :value="data" :row="props.rowData" :column="column">
                <p>{{ data }}</p>
            </slot>
        </div>
    </td>
</template>
