import React from "react";

const Reviews = () => {
  return (
      <div id="reviews" class="container-fullwidth text-center bg-grey">        
        <h2>What our customers say</h2>
        <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner bg-grey" role="listbox">
                    <div class="item active">
                        <h4>"This company is the best. I am so happy with the result!"<br></br><span>Michael Roe, Vice President, Comment Box</span></h4>
                    </div>
                    <div class="item">
                        <h4>"One word... WOW!!"<br></br><span>John Doe, Salesman, Rep Inc</span></h4>
                    </div>
                    <div class="item">
                        <h4>"Could I... BE any more happy with this company?"<br></br><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
        </div>
    </div>
        );
}

export default Reviews;