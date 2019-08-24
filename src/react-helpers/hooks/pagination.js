import { useState } from "react";

export function usePagination({
  startPage = 0,
  initialPage = 1,
  initialPageSize = 20,
  initialTotal = 0,
} = {}) {
  function getInitialData() {
    return {
      page: initialPage,
      pageSize: initialPageSize,
      total: initialTotal,
    };
  }
  const [pagination, setPagination] = useState(getInitialData());

  return [
    pagination,
    /**
     * @description setPagination
     */
    (type, payload) => {
      const nextPagi = { ...type };

      switch (type) {
      case "page":
      case "pageSize":
      case "total":
        setPagination({ [type]: payload });
        break;
      case "reset":
        setPagination(getInitialData());
        break;
      case "nextPage":
        setPagination({ page: pagination.page + 1 });
        break;
      case "prevPage":
        setPagination({
          page: Math.max(startPage, Math.max(pagination.page - 1, 0))
        });
        break;
      default:
        setPagination({
          ...pagination,
          page: nextPagi.page,
          pageSize: nextPagi.pageSize,
          total: nextPagi.total,
        });
        break;
      }
    }
  ];
}
