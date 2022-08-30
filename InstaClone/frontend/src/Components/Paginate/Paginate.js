import React from "react";
import leftArrow from "../../Images/leftarrow.png";
import rightArrow from "../../Images/rightarrow.png";
import "./Paginate.scss";

const Paginate = ({ currentPage, totalPosts, postsPerPage, Paginatefunct }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const previouspage = () => {
    if (currentPage > 1) {
      Paginatefunct(currentPage - 1);
    }
  };
  const nextpage = () => {
    if (currentPage < pageNumbers.length) {
      Paginatefunct(currentPage + 1);
    }
  };
  return (
    <div className="paginate">
      <div className="paginateWrapper">
        <img src={leftArrow} alt="" onClick={previouspage} />
        {pageNumbers.map((number) => {
          return (
            <span
              onClick={() => Paginatefunct(number)}
              style={{
                backgroundColor:
                  currentPage === number ? "rgb(196, 194, 194)" : "white",
              }}
              className="number"
            >
              {number}
            </span>
          );
        })}
        <img src={rightArrow} alt="" onClick={nextpage} />
      </div>
    </div>
  );
};

export default Paginate;
