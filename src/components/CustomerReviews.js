import React from "react";
import "./CustomerReviews.scss";
import Carrots from "../assets/carrots.svg";
import Avacado from "../assets/avacado.svg";
import Stars from "../assets/stars.svg";
function CustomerReviews() {
    return (
        <div className="customer-reviews-container">
            <div className="customer-reviews-title">
                <h1>Customer Reviews</h1>
            </div>
            <div className="blocks">
                <div className="block">
                    <h4>Arc Inspirations:</h4>
                    <img className="stars" src={Stars} alt="stars" />
                    <p>
                        We at the Arc Inspirations group have developed a fantastic working partnership with J and S Foods, built up over many years. They remain one of our key suppliers who work with us in sourcing new and innovative products for
                        our menu development. Their service is second to none and they will go the extra mile when required, I would recommend them highly.
                    </p>
                    <p className="reference">John Richold, Food Development Manager</p>
                </div>
                <div className="block">
                    <h4>Red Kite Learning Trust:</h4>
                    <img className="stars" src={Stars} alt="stars" />
                    <p>
                        J and S Foods continue to be a key strategic long term food wholesale supplier to the Red Kite Learning Trust. Our close working partnership continues to deliver an extensive range of products and services which adds
                        significant value to our catering operations across the whole of our multi academy trust. A true family business who values us as a customer and who go above and beyond to deliver and source the finest ingredients at a keen
                        price point. J and S Foods are highly knowledgeable with the vast experience of the food industry and I could not recommend them highly enough.
                    </p>
                    <p className="reference">David Carrack, Executive Chef</p>
                </div>
            </div>
            <img className="carrots" src={Carrots} alt="carrots" />
            <img className="avacado" src={Avacado} alt="avacado" />
        </div>
    );
}

export default CustomerReviews;
