import PropTypes from 'prop-types';
import "./Card.css";

const Card = ({ nameBarber, Andress, imgBarber }) => {
  return (
    <>
      <div className="card-container">
        <img
          src={imgBarber}
          alt=""
        />
        <div className="info-container">
          <h1 className="barbershop-name">{nameBarber}</h1>
          <p className="barbershop-address">
            {Andress}
          </p>
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
