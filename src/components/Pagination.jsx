import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { ItemCount, PageSize, onChange, currentPage } = props;
  const PageCount = Math.ceil(ItemCount / PageSize);
  if (PageCount === 1) return null;
  const Pages = _.range(1, PageCount + 1);
  return (
    <nav aria-label="Page navigation mt-5">
      <ul className="pagination justify-content-center">
        {Pages.map((page) => (
          <li
          className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" href="#" onClick={() => onChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
