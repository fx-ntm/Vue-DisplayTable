import type { App, Plugin } from 'vue'

// Main component
import TableMain from './components/Table/components/TableMain.vue'

// Sub-components
import TableBody from './components/Table/components/TableComponents/TableBody.vue'
import TableRow from './components/Table/components/TableComponents/TableRow.vue'
import TableCell from './components/Table/components/TableComponents/TableCell.vue'
import TableHeader from './components/Table/components/TableComponents/TableHeader.vue'
import TableHeaderCell from './components/Table/components/TableComponents/TableHeaderCell.vue'

// Types
export type { TableColumn, TableData, SortDirection } from './components/Table/types/TableTypes'

// Named exports
export {
  TableMain,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHeaderCell
}

// Default export as Vue plugin
const VueDisplayTable: Plugin = {
  install(app: App) {
    app.component('TableMain', TableMain)
    app.component('TableBody', TableBody)
    app.component('TableRow', TableRow)
    app.component('TableCell', TableCell)
    app.component('TableHeader', TableHeader)
    app.component('TableHeaderCell', TableHeaderCell)
  }
}

export default VueDisplayTable