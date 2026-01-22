# Vue-DisplayTable

[![npm version](https://img.shields.io/npm/v/vue-displaytable.svg)](https://www.npmjs.com/package/vue-displaytable)
[![npm downloads](https://img.shields.io/npm/dm/vue-displaytable.svg)](https://www.npmjs.com/package/vue-displaytable)
[![license](https://img.shields.io/npm/l/vue-displaytable.svg)](https://github.com/fx-ntm/Vue-DisplayTable/blob/main/LICENSE)

A table component for Vue 3 designed with a modular structure for high customization and editing

## Features

-   **Minimal and Modular Design:** Designed with a modular structure and a minimal design, allowing you to add your own flavor to the code as well as emitting/passing any event/prop to any part of the table you desire
-   **Vue 3 Composition API + TypeScript:** Follows the Vue 3 Composition API syntax for easy readability and TypeScript to maintain the code clean
-   **Sorting:** It has a built-in sorting feature (using arr.sort()), which can be enabled by adding the optional column parameter `sortable`.

## Installation

```bash
npm install vue-displaytable
```

## Requirements

-   Vue 3.3+
-   Tailwind CSS 4 (optional, highly recommended, default styling uses Tailwind)

## Quick Start & Examples

### Quick Start: Populating the table statically

Import the `TableMain` component and its types `TableColumn, TableData` into your .vue file. Then fill the `TableColumn` array with the name of columns, and `TableData` array with objects that have key-value pairs corresponding to the `TableColumn` key values. An example of the basic usage is as follows:

```vue
<script setup lang="ts">
import { TableMain } from 'vue-displaytable';
import type { TableColumn, TableData } from 'vue-displaytable';

const columns: TableColumn[] = [
    { key: 'id', label: 'ID', width: '10%', sortable: true },
    { key: 'name', label: 'Name', width: '30%' },
    { key: 'email', label: 'Email', width: '40%' },
    { key: 'role', label: 'Role', width: '20%' sortable: false },
];

const data: TableData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];
</script>

<template>
    <TableMain :columns="columns" :data="data" />
</template>
```
![alt text](https://github.com/fx-ntm/Vue-DisplayTable/blob/main/2025-12-17-162533_hyprshot.png "Static Content")

### Quick Start: Populating the Table dynamically

You can also populate the table dynamically using API responses. You have to make use of Vue's reactivity features to initialize a reactive array of `TableData` and then fill the array with the values you get from your API. Make sure the columns' keys in `TableColumn` array are same as the attributes you'd receive from your API!

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TableMain } from 'vue-displaytable';
import type { TableColumn, TableData } from 'vue-displaytable';

const columns: TableColumn[] = [
    { key: 'id', label: 'ID', width: '10%', sortable: true },
    { key: 'name', label: 'Name', width: '30%', sortable: true },
    { key: 'email', label: 'Email', width: '40%' },
    { key: 'company', label: 'Company', width: '20%', sortable: true },
];

const users = ref<TableData[]>([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        users.value = data.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company.name,
        }));
    } finally {
        loading.value = false;
    }
});
</script>

<template>
    <div v-if="loading">Loading...</div>
    <TableMain v-else :columns="columns" :data="users" />
</template>
```
![alt text](https://github.com/fx-ntm/Vue-DisplayTable/blob/main/2025-12-17-162726_hyprshot.png "Dynamic Content")


### Quick Start: Implementing extra functionality with slots

You can insert your own logic into the code by using slots (such as clickable cells that open a link, or an action button group of edit and delete buttons).
For this you have to define a new column with a `key`. Then inside `<TableMain></TableMain>` tags, create a `<template #cell-columnkey="{args}"></template>`
template tag, that refers to the key of the column. Inside the template tag, you can pass your own code, which be rendered using slots

Example usage:

```vue
<script setup lang="ts">
import TableMain from '../components/Table/components/TableMain.vue';
import type { TableColumn, TableData } from '../components/Table';

const actionSlotCols: TableColumn[] = [
    { key: 'id', label: 'EAN', sortable: true, width: '20%' },
    { key: 'name', label: 'Product Name', sortable: true, width: '40%' },
    { key: 'actions', label: 'Actions', sortable: false, width: '50%'}
];
const actionSlotData: TableData[] = [
    { id: 48234, name: 'Amazing Tool' },
    { id: 39534, name: 'Horrible Tool' },
];
</script>

<template>
    <TableMain :columns="actionSlotCols" :data="actionSlotData">
        <template #cell-id="{value}">  <!-- Clickable Link in the 'id' column -->
            <a :href="`${value}`" class="text-blue-500">
                {{value}}
            </a>
        </template>
        <template #cell-actions> <!-- Action Button Group in the 'actions' column -->
            <div class="flex gap-1">
                <button class="px-1 py-1 bg-blue-500 text-black rounded text-sm">
                    Edit
                </button>
                <button class="px-1 py-1 bg-red-500 text-black rounded text-sm">
                    Delete
                </button>
            </div>
        </template>
    </TableMain>
</template>
```
![alt text](https://github.com/fx-ntm/Vue-DisplayTable/blob/slots/2026-01-22-161752_hyprshot.png "Slots Functionality")

## Props

### TableMain

| Prop      | Type            | Required | Description                 |
| --------- | --------------- | -------- | --------------------------- |
| `columns` | `TableColumn[]` | Yes      | Array of column definitions |
| `data`    | `TableData[]`   | Yes      | Array of row data objects   |

### TableColumn Interface

```typescript
interface TableColumn {
    key: string; // Unique identifier, matches data property
    label: string; // Display text for header
    sortable?: boolean; // Enable sorting
    width?: string; // Column width (it converts into a CSS style, e.g., '20%', '100px')
}
```

### TableData Interface

```typescript
interface TableData {
    [key: string]: any; // Flexible key-value pairs
}
```

## Component Architecture

Vue-DisplayTable is designed completely modularly. Each part can be imported individually and used to your liking:

```typescript
import {
    TableMain, // Main wrapper component
    TableHeader, // Table header (thead)
    TableHeaderCell, // Individual header cell (th)
    TableBody, // Table body (tbody)
    TableRow, // Individual row (tr)
    TableCell, // Individual cell (td)
} from 'vue-displaytable';
```

## Styling

Vue-DisplayTable uses Tailwind CSS classes, albeit very minimal to not have any conflicting styles with your individual ones. To use the default styles, make sure that you have Tailwind 4 installed, otherwise the table may seem off.

### Customizing Styles

You can override styles using Tailwind's utility classes or your own CSS. The components use standard HTML table elements (`table`, `thead`, `tbody`, `tr`, `th`, `td`).

## Honorable Mentions to the DataTables Library
I've taken a huge inspiration by https://github.com/DataTables/DataTablesSrc while creating this library. At work I initially used DataTables for a project, after which I decided to make my own library to meet my project's individual needs. As I noticed that my own library strays far away from DataTables' design and principle (mainly the jQuery and Tailwind approach, Vue's reactivity approach compared to jQuery and some customization concerns I experienced), I've decided to open-source the code I've written.

## License

MIT © [fx-ntm](https://github.com/fx-ntm)
