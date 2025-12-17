<script setup lang="ts">
import TableMain from './components/Table';
import type { TableColumn, TableData } from './components/Table';

const cols: TableColumn[] = [
  {key: 'id', label: 'ID', sortable: true, width:'10%'},
  {key: 'fname', label: 'First Name', sortable: true, width: '25%'},
  {key: 'lname', label: 'Last Name', sortable: true, width: '25%'},
  {key: 'email', label: 'E-Mail Address', sortable: true, width: '40%'}
];

const dataa: TableData[] = [
  {id: 1, fname: 'Jackson', lname: 'Smith', email: 'jsmith004@gmail.com'},
];
</script>

<template>
    <TableMain 
        :columns="cols"
        :data="dataa"
    />
</template>
