import * as React from 'react';
import Box from '@mui/material/Box';
import './View.css'
import SearchAppBar from '../appbar/SearchAppBar';
import BasicTable from '../table/BasicTable';

export default function View() {
  return (

    <Box>
      <SearchAppBar></SearchAppBar>
      <BasicTable className="main-panel">
      </BasicTable>
    </Box>

  );
}
