<script setup lang="ts">
import TableMain from '../components/Table/components/TableMain.vue';
import type { TableColumn, TableData } from '../components/Table';

const cols: TableColumn[] = [
    { key: 'id', label: 'ID', sortable: true, width: '10%' },
    { key: 'fname', label: 'First Name', sortable: true, width: '25%' },
    { key: 'lname', label: 'Last Name', sortable: true, width: '25%' },
    { key: 'email', label: 'E-Mail Address', sortable: true, width: '40%' },
];

const dataa: TableData[] = [
    { id: 1, fname: 'Jackson', lname: 'Smith', email: 'jsmith004@gmail.com' },
    { id: 2, fname: 'Martha', lname: 'Benedict', email: 'mben@benedicts.com' },
];
</script>

<template>
    <div
        class="bg-gray-100 dark:bg-gray-800 w-full flex flex-col gap-y-8 align-center content-center justify-center p-8"
    >
        <div>
            <h1 class="text-center text-3xl">Vue-DisplayTable</h1>
            <h2 class="text-2xl">
                A highly customizable and modular Table library for Vue 3, using
                TypeScript and Tailwind 4.
            </h2>
        </div>

        <div class="p-2 flex gap-x-4">
            <div class="w-2/5 border-2">
                <TableMain :columns="cols" :data="dataa" />
            </div>

            <div class="w-1/2">
                <h3 class="font-bold text-xl text-left">Minimal Design</h3>
                <p class="text-left">
                    Vue-DisplayTable comes with minimal amount of design,
                    allowing you to add your own flavor to your table with an
                    ease without any styling conflicts
                </p>
            </div>
        </div>

        <div class="p-2 flex gap-x-4">
            <div class="w-1/2">
                <h3 class="font-bold text-xl text-left">Modular Structure</h3>
                <p class="text-left">
                    Every part of the Vue-DisplayTable component is a Vue
                    component of its own, allowing you to not just customize
                    them freely, but also emitting or passing props and events
                    into them individually
                </p>
            </div>

            <div class="w-2/5 border-2">
                <TableMain :columns="cols" :data="dataa" />
            </div>
        </div>
    </div>
</template>
