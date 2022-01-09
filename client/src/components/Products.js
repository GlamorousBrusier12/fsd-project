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
  const [isFurnitureChecked, setIsFurnitureChecked] = useState(false);
  const [isAppliancesChecked, setIsAppliancesChecked] = useState(false);
  const [isFashionChecked, setIsFashionChecked] = useState(false);
  const [isElectronicsChecked, setIsElectronicsChecked] = useState(false);
  const [isBuyChecked, setIsBuyChecked] = useState(false);
  const [isRentChecked, setIsRentChecked] = useState(false);
  const [isFourStarChecked, setIsFourStarChecked] = useState(false);
  const [isThreeStarChecked, setIsThreeStarChecked] = useState(false);
  const [isTwoStarChecked, setIsTwoStarChecked] = useState(false);
  const [isOneStarChecked, setIsOneStarChecked] = useState(false);
  const [isSeventyFiveChecked, setIsSeventyFiveChecked] = useState(false);
  const [isFiftyChecked, setIsFiftyChecked] = useState(false);
  const [isTwentyFiveChecked, setIsTwentyFiveChecked] = useState(false);
  const [isTenChecked, setIsTenChecked] = useState(false);
  const [isLTHChecked, setIsLTHChecked] = useState(false);
  const [isHTLChecked, setIsHTLChecked] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(searchResults.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleCategoryClick = (category, isChecked) => {
    if (!isChecked) {
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
        <div className=" main-container">
          {/* Filter Container each sub-filter has one div and that div contains the filters */}
          <div className="filters-container">
            <div className="filter-department">
              <p className="filter-headings">Sort By:</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  name="LTH"
                  id="LTH"
                  value="LTH"
                  checked={isLTHChecked}
                  onChange={() => {
                    setIsLTHChecked(!isLTHChecked);
                    handleCategoryClick("?_sort=price", isLTHChecked);
                  }}
                />
                <label htmlFor="LTH">Price: Low to High</label>
                <br />
                <input
                  type="checkbox"
                  name="HTL"
                  id="HTL"
                  value="HTL"
                  checked={isHTLChecked}
                  onChange={() => {
                    setIsHTLChecked(!isHTLChecked);
                    handleCategoryClick(
                      "?_sort=price&_order=desc",
                      isHTLChecked
                    );
                  }}
                />
                <label htmlFor="LTH">Price: High to Low</label>
              </div>
            </div>
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
                  checked={isFashionChecked}
                  onChange={() => {
                    setIsFashionChecked(!isFashionChecked);
                    handleCategoryClick(
                      "?Category=Mens&Category=Womens&Category=Kids",
                      isFashionChecked
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
                  checked={isAppliancesChecked}
                  onChange={() => {
                    setIsAppliancesChecked(!isAppliancesChecked);
                    handleCategoryClick(
                      "?Category=Appliances",
                      isAppliancesChecked
                    );
                  }}
                />
                <label htmlFor="department3"> Home Appliances</label>
                <br />
                <input
                  type="checkbox"
                  name="department4"
                  id="department4"
                  value="Furniture"
                  checked={isFurnitureChecked}
                  onChange={() => {
                    setIsFurnitureChecked(!isFurnitureChecked);
                    handleCategoryClick("?Category=Home", isFurnitureChecked);
                  }}
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
              <p className="filter-headings">Availability Type</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  name="buy"
                  id="buy"
                  value="Buy"
                  checked={isBuyChecked}
                  onChange={() => {
                    setIsBuyChecked(!isBuyChecked);
                    handleCategoryClick("?type=Buy", isBuyChecked);
                  }}
                />
                <label htmlFor="buy"> Buy</label>
                <br />
                <input
                  type="checkbox"
                  name="rent"
                  id="rent"
                  value="Rent"
                  checked={isRentChecked}
                  onChange={() => {
                    setIsRentChecked(!isRentChecked);
                    handleCategoryClick("?type=Rent", isRentChecked);
                  }}
                />
                <label htmlFor="rent"> Rent</label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Avg. Customer Review</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  name="rating4"
                  id="rating4"
                  value="4"
                  checked={isFourStarChecked}
                  onChange={() => {
                    setIsFourStarChecked(!isFourStarChecked);
                    handleCategoryClick(
                      "?rating.rate_gte=4",
                      isFourStarChecked
                    );
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
                <input
                  type="checkbox"
                  name="rating3"
                  id="rating3"
                  value="3"
                  checked={isThreeStarChecked}
                  onChange={() => {
                    setIsThreeStarChecked(!isThreeStarChecked);
                    handleCategoryClick(
                      "?rating.rate_gte=3",
                      isThreeStarChecked
                    );
                  }}
                />
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
                <input
                  type="checkbox"
                  name="rating2"
                  id="rating2"
                  value="2"
                  checked={isTwoStarChecked}
                  onChange={() => {
                    setIsTwoStarChecked(!isTwoStarChecked);
                    handleCategoryClick("?rating.rate_gte=2", isTwoStarChecked);
                  }}
                />
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
                <input
                  type="checkbox"
                  name="rating1"
                  id="rating1"
                  value="1"
                  checked={isOneStarChecked}
                  onChange={() => {
                    setIsOneStarChecked(!isOneStarChecked);
                    handleCategoryClick("?rating.rate_gte=1", isOneStarChecked);
                  }}
                />
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
                  checked={isSeventyFiveChecked}
                  onChange={() => {
                    setIsSeventyFiveChecked(!isSeventyFiveChecked);
                    handleCategoryClick(
                      "?discount_gte=75",
                      isSeventyFiveChecked
                    );
                  }}
                />
                <label htmlFor="discount1"> 75% and more</label>
                <br />
                <input
                  type="checkbox"
                  id="discount2"
                  name="discount2"
                  value="50"
                  checked={isFiftyChecked}
                  onChange={() => {
                    setIsFiftyChecked(!isFiftyChecked);
                    handleCategoryClick("?discount_gte=50", isFiftyChecked);
                  }}
                />
                <label htmlFor="discount2"> 50% and more</label>
                <br />
                <input
                  type="checkbox"
                  id="discount3"
                  name="discount3"
                  value="25"
                  checked={isTwentyFiveChecked}
                  onChange={() => {
                    setIsTwentyFiveChecked(!isTwentyFiveChecked);
                    handleCategoryClick(
                      "?discount_gte=25",
                      isTwentyFiveChecked
                    );
                  }}
                />
                <label htmlFor="discount3"> 25% and more</label>
                <br />
                <input
                  type="checkbox"
                  id="discount4"
                  name="discount4"
                  value="10"
                  checked={isTenChecked}
                  onChange={() => {
                    setIsTenChecked(!isTenChecked);
                    handleCategoryClick("?discount_gte=10", isTenChecked);
                  }}
                />
                <label htmlFor="discount4"> 10% and more</label>
                <br />
              </div>
            </div>
          </div>
          {/* Rendering EachProduct component using map function and sending data through props. */}
            {searchResults.length !== 0 ? (
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
      ) : (
        <NoResult />
      )}
        </div>
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
