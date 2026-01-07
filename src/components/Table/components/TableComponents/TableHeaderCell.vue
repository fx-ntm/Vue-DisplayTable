<script setup lang="ts">
import type { TableColumn, SortDirection } from '../../types/TableTypes';
import { computed } from 'vue';

const props = defineProps<{
    title?: string;
    column: TableColumn;
    isSorted?: boolean;
    sortDirection?: SortDirection;
}>();

const cellStyle = computed(() => {
    if (props.column.width) {
        return { width: props.column.width };
    }
    return {};
});

const emit = defineEmits<{
    sort: [column: TableColumn]
}>();

const handleClick = () => {
    if (props.column.sortable) {
        emit('sort', props.column);
    }
};

const sortIndicator = computed(() => {
    if (!props.isSorted || !props.sortDirection) return '';
    return props.sortDirection === 'asc' ? ' ↑' : ' ↓';
});
</script>

<template>
    <th
        :style="cellStyle"
        class="py-3 pr-3 font-bold text-left dark:text-white select-none"
        @click="handleClick"
    >
        {{ props.title }}<span v-if="column.sortable">{{ sortIndicator }}</span>
    </th>
</template>
