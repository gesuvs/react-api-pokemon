import { PaginationItem, PaginationContainer } from "./pagination";
import { Icon } from "../Icon/icon";
import { usePagination } from "../../hooks/usePagination";

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}) {
  const pagination = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = pagination[pagination.length - 1];

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  return (
    <PaginationContainer>
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <Icon>chevron_left</Icon>
      </PaginationItem>
      {pagination.map((pageNumber, idx) => {
        if (pageNumber === "...") {
          return (
            <PaginationItem key={idx + 1} disabled>
              ...
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <Icon>navigate_next</Icon>
      </PaginationItem>
    </PaginationContainer>
  );
}
