import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import MaUTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useExpanded, useSortBy, useTable } from 'react-table';

import { Box, CardHeader, Divider, InputAdornment, OutlinedInput, TablePagination, TableSortLabel } from '@mui/material';
import useTables from '../hooks/useTable';
import useUiConfigChangeReducer from '../hooks/useUiConfigChangeReducer';
import { ComponentT } from '../types';

function Table({ columns, data }: any) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useSortBy,
        useExpanded
    );

    // Render the UI for your table
    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableCell
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                style={{ border: '1px solid lightgrey', textAlign: 'center' }}
                            >
                                {!column.disableSortBy ? (
                                    <TableSortLabel
                                        active={column.isSorted}
                                        direction={column.isSorted ? (column.isSortedDesc ? 'asc' : 'desc') : 'asc'}
                                    >
                                        {column.render('Header')}
                                    </TableSortLabel>
                                ) : (
                                    column.render('Header')
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row, _i) => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <TableCell {...cell.getCellProps()} style={{ border: '1px solid lightgrey' }}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </MaUTable>
    );
}

function MTable({ item }: ComponentT) {
    const { config } = item;
    useUiConfigChangeReducer(item);

    const { count, pageSize, rowsPerPage, search, handleChangePage, handleChangeRowsPerPage, handleSearch } = useTables();

    return (
        <div>
            {item.title && (
                <Box marginBottom={2}>
                    <CardHeader title={item.title} sx={{ textAlign: item.titlePosition }} />
                    <Divider />
                </Box>
            )}

            <Box marginBottom={2} textAlign="right">
                <OutlinedInput
                    id="outlined-basic"
                    type="text"
                    value={search}
                    placeholder="Search"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    onChange={handleSearch}
                />
            </Box>

            <CssBaseline />
            <Table columns={config.header} data={config.data} />
            {count && (
                <TablePagination
                    component="div"
                    count={count ? count : 0}
                    rowsPerPage={rowsPerPage ? rowsPerPage : 0}
                    page={pageSize ? pageSize : 0}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </div>
    );
}

export default MTable;
