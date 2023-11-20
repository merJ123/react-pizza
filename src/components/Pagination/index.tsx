import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) =>
<ReactPaginate
  forcePage={currentPage - 1}
  className={styles.root}
  breakLabel="..."
  nextLabel=">"
  onPageChange={(event) => onChangePage(event.selected + 1)}
  pageRangeDisplayed={4}
  pageCount={3}
  previousLabel="<"
  renderOnZeroPageCount={null}
/>

export default Pagination;
