/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let i = from;
  const rangeList = [];

  while (i <= to) {
    rangeList.push(i);
    i += step;
  }

  return rangeList;
};

/**
 * @class Pagination
 */
class Pagination extends Component {
  /**
   * @param {*} props
   * @returns {*} - state
   */
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    // pageNeighbours can be: 0, 1 or 2
    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  /**
   *
   * @returns {*} - func
   */
  componentDidMount() {
    this.gotoPage(1);
  }

  /**
   * @param {*} page
   * @returns {*} - state
   */
  gotoPage = (page) => {
    const { onPageChanged = f => f } = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };
    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  /**
   * @param {*} page
   * @param {*} evt
   * @returns {*} - state
   */
  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  /**
   * @param {*} evt
   * @returns {*} - state
   */
  handleMoveLeft = (evt) => {
    evt.preventDefault();
    const { currentPage } = this.state;
    this.gotoPage(currentPage - this.pageNeighbours * 2 - 1);
  };

  /**
   * @param {*} evt
   * @returns {*} - state
   */
  handleMoveRight = (evt) => {
    evt.preventDefault();
    const { currentPage } = this.state;
    this.gotoPage(currentPage + this.pageNeighbours * 2 + 1);
  };

  fetchPageNumbers = () => {
    
    const totalPages = this.totalPages;
    const { currentPage } = this.state;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  /**
   *
   * @returns {*} - render
   */
  render() {
    if (!this.totalRecords) return null;

    if (this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <>
        <ul className="pagination justify-content-center">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE) {
              return (
                <li key={index} className="page-item">
                  <Link className="page-link"
                    to="#"
                    onClick={this.handleMoveLeft}
                  >
                      Next
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              );
            }

            if (page === RIGHT_PAGE) {
              return (
                <li className="page-item">
                  <Link className="page-link"
                    to="#"
                    onClick={this.handleMoveRight}
                  >
                      Next
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={index}
                className={`page-item${
                  currentPage === page ? ' active' : ''
                }`}
              >
                <Link
                  className="page-link"
                  to="#"
                  onClick={e => this.handleClick(page, e)}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
