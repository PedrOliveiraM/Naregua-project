import PropTypes from "prop-types";

import "./Card.css";
import { StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";

const Card = ({ nameBarber, Andress, imgBarber }) => {
  return (
    <>
      <div className="card-container">
        <div className="badge-container">
          <div className="badge-content">
            <Badge variant={"secondary"} className="badge">
              <div className="badge-cont">
                <StarIcon size={16} className="star-icon fill-primary" />
                <span className="star-value">4.5</span>
              </div>
            </Badge>
          </div>
        </div>
        <div className="barber-logo">
          <div className="image-container">
            <img src={imgBarber} alt="img" />
          </div>
        </div>
        <div className="info-container">
          <h1 className="barbershop-name">{nameBarber}</h1>
          <p className="barbershop-address">{Andress}</p>
        </div>
        <button className="reservation-button">Reservar</button>
      </div>
    </>
  );
};

Card.propTypes = {
  nameBarber: PropTypes.string.isRequired,
  Andress: PropTypes.string.isRequired,
  imgBarber: PropTypes.string.isRequired,
};

export default Card;
