import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import mycard from "../database";

function Card() {
  return (
    <div>
      <div className="card">
        {mycard.map(
          (
            {
              content,
              money,
              image,
              subcontent,
              consern,
              countryLate,
              country,
            },
            index
          ) => {
            return (
              <>
                <div className="card__container" key={index}>
                  <div className="image__container">
                    <img src={image} alt="image1" />
                  </div>
                  <div className="content_container">
                    <div className="rating_container">
                      <p>
                        <AiTwotoneStar className="lating_icon" />
                        <span>
                          {" "}
                          {countryLate}
                          {country}
                        </span>
                      </p>
                    </div>
                    <p className="content_display">{content}</p>

                    <div className="inspiration">{subcontent}</div>
                    <div className="requered_from">
                      <p>
                        <b>{money}</b>
                        <span>/{consern}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Card;
