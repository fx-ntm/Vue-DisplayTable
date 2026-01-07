import { ref, computed } from 'vue';
import type {
    TableColumn,
    SortDirection,
    TableData,
} from '../types/TableTypes';

export function useSorting(data: TableData[]) {
    const sortKey = ref<string | null>(null);
    const sortDirection = ref<SortDirection>(null);

    const handleSort = (column: TableColumn) => {
        if (!column.sortable) return;

        if (sortKey.value === column.key) {
            if (sortDirection.value === 'asc') {
                sortDirection.value = 'desc';
            } else if (sortDirection.value === 'desc') {
                sortDirection.value = null;
                sortKey.value = null;
            } else {
                sortDirection.value = 'asc';
            }
        } else {
            sortKey.value = column.key;
            sortDirection.value = 'asc';
        }
    };

    const sortedData = computed(() => {
        if (!sortKey.value || !sortDirection.value) {
            return data;
        }

        return [...data].sort((a, b) => {
            const aVal = a[sortKey.value!];
            const bVal = b[sortKey.value!];

            if (aVal == null) return sortDirection.value === 'asc' ? 1 : -1;
            if (bVal == null) return sortDirection.value === 'asc' ? -1 : 1;

            let comparison = 0;
            if (typeof aVal === 'string' && typeof bVal === 'string') {
                comparison = aVal.localeCompare(bVal);
            } else {
                comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            }

            return sortDirection.value === 'asc' ? comparison : -comparison;
        });
    });
    return {
        handleSort,
        sortedData,
        sortKey,
        sortDirection,
    };
}
