import React, { Component } from "react";
import "./slider.css";
class BtnSlider extends Component {
  render() {
    // console.log(this.props.moveSlide);
    return (
      <button
        className={
          this.props.direction === "next" ? "btn-slide next" : "btn-slide prev"
        }
        onClick={this.props.moveSlide}
      >
        <i
          className={`fas fa-arrow-${
            this.props.direction === "prev" ? "left" : "right"
          }`}
        ></i>
      </button>
    );
  }
}

export default BtnSlider;
