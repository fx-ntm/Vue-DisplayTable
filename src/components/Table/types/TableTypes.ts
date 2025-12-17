export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
}

export interface TableData {
    [key: string]: any;
}

export type SortDirection = 'asc' | 'desc' | null;
