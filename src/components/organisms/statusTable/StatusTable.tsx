import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { mockData } from './mockData';
import ButtonGroup, { Buttons } from '../../molecules/buttonGroup/ButtonGroup';
import {
  selectStatusFilterType,
  selectStatusFilterValue,
  updateStatusFilter,
} from '../../../features/table/tableSlice';

import { Project } from '../../../types';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { usePagination } from './hooks/usePagination';
import { useStatusFilter } from './hooks/useStatusFilter';

interface StatusTableProps {
  buttons: Buttons[];
  apiData?: Project[];
}

const StatusTable = ({ buttons, apiData }: StatusTableProps) => {
  const [gridApi, setGridApi] = useState<any>(null);
  const [rowData, setRowData] = useState([]);
  const [filterText, setFilterText] = useState('');

  const {
    currentPage,
    totalPages,
    totalRows,
    updatePage,
    paginationButtons,
    pageSizeButtons,
  } = usePagination(gridApi);

  const onGridReady = (params: any) => {
    setGridApi(params.api);

    const updateData = (data: any) => {
      setRowData(apiData || data);
    };

    updateData(mockData);
  };

  useEffect(() => {
    if (!gridApi) return;
    gridApi?.sizeColumnsToFit();
    setTimeout(() => {
      updatePage();
    }, 500);
  }, [gridApi]);

  useEffect(() => {
    gridApi?.setQuickFilter(filterText);
    updatePage();
  }, [filterText]);

  const { statusFilter } = useStatusFilter(gridApi, updatePage);

  const isExternalFilterPresent = () => true;
  const doesExternalFilterPass = (node: any) => {
    if (statusFilter === 'A') return true;
    return (
      node.data?.overallStatus?.toLocaleLowerCase?.() ===
      statusFilter.toLocaleLowerCase()
    );
  };

  // table title color
  const statusColor = useSelector(selectStatusFilterType);

  const cellValueChanged = async (params: any) => {
    console.log(params);
    const res = await axios.put(
      `http://localhost:3004/projects/${params.data.id}`,
      params.data,
    );
    console.log(res);
  };

  const statusColumnValidParams = {
    values: ['R', 'G', 'Y', 'A'],
  };

  return (
    <div className="flex flex-col" style={{ height: 600 }}>
      <div
        className={`bg-${statusColor}-300 text-2xl my-3 rounded p-2 select-none capitalize`}
      >
        Showing {statusColor === 'blue' ? 'All' : statusColor} Projects
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xs text-gray-400 pl-1">
          Double click a cell to edit
        </span>
        <input
          className="border-2 border-gray-300 rounded mb-3 p-1"
          placeholder="Filter Results..."
          value={filterText}
          onChange={event => setFilterText(event?.target?.value)}
        />
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: '100%', width: '100%' }}
      >
        <AgGridReact
          rowData={rowData}
          pagination={true}
          suppressPaginationPanel={true}
          paginationPageSize={10}
          onGridReady={onGridReady}
          rowStyle={{ width: 'full' }}
          cacheQuickFilter={true}
          isExternalFilterPresent={isExternalFilterPresent}
          doesExternalFilterPass={doesExternalFilterPass}
          onCellValueChanged={cellValueChanged}
        >
          <AgGridColumn
            sortable={true}
            filter={true}
            field="projectName"
            editable={true}
          ></AgGridColumn>
          <AgGridColumn
            sortable={true}
            filter={true}
            field="projectManager"
            editable={true}
          ></AgGridColumn>
          <AgGridColumn
            sortable={true}
            field="overallStatus"
            cellEditor="agPopupSelectCellEditor"
            cellEditorParams={statusColumnValidParams}
          ></AgGridColumn>
          <AgGridColumn
            sortable={true}
            field="percentageComplete"
            editable={true}
          ></AgGridColumn>
          <AgGridColumn
            sortable={true}
            field="modifiedDate"
            editable={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
      <div className="mt-3 flex items-center">
        <span className="w-1/3">
          <ButtonGroup
            color="primary"
            buttons={pageSizeButtons}
            enableFocus={true}
          />
        </span>
        <div className="w-1/3 flex justify-center">
          <ButtonGroup color="primary" buttons={paginationButtons} />
        </div>
        <div className="md:w-1/3 flex flex-col md:flex-row md:justify-end">
          <span>Showing page {currentPage}&nbsp;</span>
          <span>of {totalPages}</span>
          <span>, of {totalRows} entries</span>
        </div>
      </div>
    </div>
  );
};

export default StatusTable;
