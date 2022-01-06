import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';
import forceIcon from '../images/forceIcon.png';
import defenseIcon from '../images/defenseIcon.png';
import inteligenceIcon from '../images/inteligenceIcon.png';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    } = this.props;
    return (
      <div className="cardContainer">
        <h1 data-testid="name-card" className="cardName">{ cardName }</h1>
        <img
          src={ cardImage }
          alt=""
          data-testid="image-card"
          className="cardImage"
        />
        <p data-testid="description-card" className="cardDesc">{ cardDescription }</p>
        <div className="cardAtributes">
          <span>
            <img src={ forceIcon } alt="" className="icon" />
            <p data-testid="attr1-card">{ cardAttr1 }</p>
          </span>
          <span>
            <img src={ defenseIcon } alt="" className="icon" />
            <p data-testid="attr2-card">{ cardAttr2 }</p>
          </span>
          <span>
            <img src={ inteligenceIcon } alt="" className="icon" />
            <p data-testid="attr3-card">{ cardAttr3 }</p>
          </span>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default Card;
