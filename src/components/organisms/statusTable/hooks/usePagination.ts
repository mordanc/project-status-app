import { useState } from 'react';

export const usePagination = (gridApi: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRows, setTotalRows] = useState(1);

  const updatePage = () => {
    const page = gridApi?.paginationGetCurrentPage() + 1;
    const maxPage = gridApi?.paginationGetTotalPages();
    const totalRows = gridApi?.paginationGetRowCount();

    setCurrentPage(page);
    setTotalPages(maxPage);
    setTotalRows(totalRows);
  };

  const changePageSize = (newPageSize: number) => {
    gridApi?.paginationSetPageSize(newPageSize);
  };

  const changeAndUpdatePage = (pageSize: number) => {
    changePageSize(pageSize);
    updatePage();
  };

  const pageSizeButtons = [
    { label: '10', onClick: () => changeAndUpdatePage(10) },
    { label: '20', onClick: () => changeAndUpdatePage(20) },
    { label: '30', onClick: () => changeAndUpdatePage(30) },
  ];

  const paginationButtons = [
    {
      label: 'Prev',
      onClick: () => {
        gridApi?.paginationGoToPreviousPage();
        updatePage();
      },
    },
    {
      label: 'Next',
      onClick: () => {
        gridApi?.paginationGoToNextPage();
        updatePage();
      },
    },
  ];

  return {
    currentPage,
    totalPages,
    totalRows,
    updatePage,
    pageSizeButtons,
    paginationButtons,
  };
};
