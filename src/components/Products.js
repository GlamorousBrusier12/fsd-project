import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import EachProduct from "./EachProduct";
import Categories from "./Categories";
import "../styles/ProductsStyles.css";
import { connect } from "react-redux";
import { handleCategoryFilter, renderallProducts } from "../actions";
import ReactPaginate from "react-paginate";
import NoResult from "./NoResult";
function Products(props) {
  let { searchResults } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [isElectronicsChecked, setIsElectronicsChecked] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(searchResults.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleCategoryClick = (category, temp) => {
    if (!temp) {
      // console.log("searching for ", category);
      props.dispatch(handleCategoryFilter(category));
    } else {
      props.dispatch(renderallProducts());
    }
  };
  return (
    <div>
      <br />
      <Categories />
      {searchResults.length !== 0 ? 
      <div className=" main-container">
        {/* Filter Container each sub-filter has one div and that div contains the filters */}
        <div className="filters-container">
          <div className="filter-department">
            <p className="filter-headings">Department</p>
            <div className="sub-filters">
              <input
                type="checkbox"
                name="department1"
                id="department1"
                value="Electronics"
                checked={isElectronicsChecked}
                onChange={() => {
                  setIsElectronicsChecked(!isElectronicsChecked);
                  handleCategoryClick(
                    "?Category=Mobiles&Category=Appliances&Category=Accessories",
                    isElectronicsChecked
                  );
                }}
              />
              <label htmlFor="department1"> Electronics</label>
              <br />
              <input
                type="checkbox"
                name="department2"
                id="department2"
                value="Fashion"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                  handleCategoryClick(
                    "?Category=Mens&Category=Womens&Category=Kids",
                    isChecked
                  );
                }}
              />
              <label htmlFor="department2"> Fashion</label>
              <br />
              <input
                type="checkbox"
                name="department3"
                id="department3"
                value="Home Aplliances"
              />
              <label htmlFor="department3"> Home Appliances</label>
              <br />
              <input
                type="checkbox"
                name="department4"
                id="department4"
                value="Furniture"
              />
              <label htmlFor="department4"> Furniture</label>
              <br />
            </div>
          </div>
          {/* <div className="filter-department">
            <p className="filter-headings">Brands</p>
            <div className="sub-filters">
              <input type="checkbox" name="brand1" id="brand1" value="Apple" />
              <label htmlFor="brand1"> Apple</label>
              <br />
              <input type="checkbox" name="brand2" id="brand2" value="Relame" />
              <label htmlFor="brand2"> Relame</label>
              <br />
              <input
                type="checkbox"
                name="brand3"
                id="brand3"
                value="Samsung"
              />
              <label htmlFor="brand3"> Samsung</label>
              <br />
              <input type="checkbox" name="brand4" id="brand4" value="Redmi" />
              <label htmlFor="brand4"> Redmi</label>
              <br />
              <input type="checkbox" name="brand5" id="brand5" value="Oppo" />
              <label htmlFor="brand5"> Oppo</label>
              <br />
              <input type="checkbox" name="brand6" id="brand6" value="Vivo" />
              <label htmlFor="brand6"> Vivo</label>
              <br />
              <input
                type="checkbox"
                name="brand7"
                id="brand7"
                value="Passionfruit"
              />
              <label htmlFor="brand7"> Passionfruit</label>
              <br />
            </div>
          </div> */}
          <div className="filter-department">
            <p className="filter-headings">Avg. Customer Review</p>
            <div className="sub-filters">
              <input
                type="checkbox"
                name="rating4"
                id="rating4"
                value="4"
                onClick={() => {
                  handleCategoryClick("?rating.rate_gte=4");
                }}
              />
              <label htmlFor="rating4">
                <StarRatings
                  rating={4}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#FF9529"
                />
                &amp; Up
              </label>
              <br />
              <input type="checkbox" name="rating3" id="rating3" value="3" />
              <label htmlFor="rating3">
                <StarRatings
                  rating={3}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#FF9529"
                />
                &amp; Up
              </label>
              <br />
              <input type="checkbox" name="rating2" id="rating2" value="2" />
              <label htmlFor="rating2">
                <StarRatings
                  rating={2}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#FF9529"
                />
                &amp; Up
              </label>
              <br />
              <input type="checkbox" name="rating1" id="rating1" value="1" />
              <label htmlFor="rating1">
                <StarRatings
                  rating={1}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#FF9529"
                />
                &amp; Up
              </label>
              <br />
            </div>
          </div>
          <div className="filter-department">
            <p className="filter-headings">Discount</p>
            <div className="sub-filters">
              <input
                type="checkbox"
                id="discount1"
                name="discount1"
                value="75"
              />
              <label htmlFor="discount1"> 75% and more</label>
              <br />
              <input
                type="checkbox"
                id="discount2"
                name="discount2"
                value="50"
              />
              <label htmlFor="discount2"> 50% and more</label>
              <br />
              <input
                type="checkbox"
                id="discount3"
                name="discount3"
                value="25"
              />
              <label htmlFor="discount3"> 25% and more</label>
              <br />
              <input
                type="checkbox"
                id="discount4"
                name="discount4"
                value="10"
              />
              <label htmlFor="discount4"> 10% and more</label>
              <br />
            </div>
          </div>
        </div>
        {/* Rendering EachProduct component using map function and sending data through props. */}
        <div className="products-container">
          {/* {searchResults.map((item, index) => {
              return <EachProduct content={item} key={index} />;
            })} */}

          {searchResults
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((item, index) => {
              return <EachProduct content={item} key={index} />;
            })}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>: <NoResult/>}
    </div>
  );
}
// }

function mapStateToProps(state) {
  return {
    searchResults: state.search,
  };
}
export default connect(mapStateToProps)(Products);
// { store:{user, search}}
