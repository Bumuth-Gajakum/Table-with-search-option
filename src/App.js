
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

function App() {

  const products = [
    { id: 1, name: 'George', Roll_Type: 'Student' },
    { id: 2, name: 'Jeffrey', Roll_Type: 'Lecturer' },
    { id: 3, name: 'Alice', Roll_Type: 'Lecturer' },
    { id: 4, name: 'Foster', Roll_Type: 'Student' },
    { id: 5, name: 'Tracy', Roll_Type: 'Examiner' },
    { id: 6, name: 'Joesph', Roll_Type: 'Student' },
    { id: 7, name: 'Tania', Roll_Type: 'Sub Admin' },
    { id: 8, name: 'Chelsea', Roll_Type: 'Student' },
    { id: 9, name: 'Benedict', Roll_Type: 'Student' },
    { id: 10, name: 'Chadd', Roll_Type: 'Student' },
    { id: 11, name: 'Delphine', Roll_Type: 'Sub Admin' },
    { id: 12, name: 'Elinore', Roll_Type: 'Examiner' },
    { id: 13, name: 'Stokes', Roll_Type: 'Student' },
    { id: 14, name: 'Tamara', Roll_Type: 'Student' },
    { id: 15, name: 'Zackery', Roll_Type: 'Examiner' }
  ];

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'Roll_Type', text: 'Roll_Type', sort: true },
    {
      text: 'Actions',
      formatter: (cellContent, row) => (
        <>
         <button className="btn btn-primary btn-sm mr-2 view-button" style={{ marginRight: '10px' }}>
  <FontAwesomeIcon icon={faEye} />
</button>
<button className="btn btn-success btn-sm mr-2 edit-button" style={{ marginRight: '10px' }}>
  <FontAwesomeIcon icon={faEdit} />
</button>
<button className="btn btn-danger btn-sm" style={{ marginRight: '10px' }}>
  <FontAwesomeIcon icon={faTrash} />
</button>
        </>
      )
    }
  ];
  

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;

  return (
    <div className="App">
   
      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={products}
        columns={columns}
        search
      >
        {
          props => (
            <div>
              <h6>Find Users:</h6>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
              />
            </div>
          )
        }
        
      </ToolkitProvider>

    </div>
  );
}

export default App;