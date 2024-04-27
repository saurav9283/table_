import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const columns = [
  { field: 'id', headerName: 'ID', width: 170, possition: { sticky: 'true' }},
  { field: 'firstName', headerName: 'First name', width: 170, sticky: true },
  { field: 'lastName', headerName: 'Last name', width: 170 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 170,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'address',
    headerName: 'Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
  },
  {
    field: 'number',
    headerName: 'Phone Number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', address: "Delhi", age: 35, number: "098766789" },
  { id: 2, lastName: 'Snow', firstName: 'Jon', address: "Delhi", age: 35, number: "098766789" },
  { id: 3, lastName: 'Snow', firstName: 'Jon', address: "Delhi", age: 35, number: "098766789" },
  { id: 4, lastName: 'Snow', firstName: 'Jon', address: "Delhi", age: 35, number: "098766789" },
  { id: 5, lastName: 'Snow', firstName: 'Jon', address: "Delhi", age: 35, number: "098766789" },
  { id: 6, lastName: 'Snow', firstName: 'Jon', address: "Delhi", age: 35, number: "098766789" },
];

export default function DataTable() {
  // const classes = useStyles();

  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection.selectionModel);
  };


  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onSelectionModelChange={handleSelectionChange}
      />
    </div>
  );
}
