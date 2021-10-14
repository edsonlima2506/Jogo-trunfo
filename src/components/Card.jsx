import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName: card,
      cardDescription: description,
      cardAttr1: atr1,
      cardAttr2: atr2,
      cardAttr3: atr3,
      cardImage: image,
      cardRare: rare,
      cardTrunfo: trunfo,
    } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{ card }</h1>
        <img src={ image } alt={ card } data-testid="image-card" />
        <p data-testid="description-card">{ description }</p>
        <p data-testid="attr1-card">{ atr1 }</p>
        <p data-testid="attr2-card">{ atr2 }</p>
        <p data-testid="attr3-card">{ atr3 }</p>
        <p data-testid="rare-card">{ rare }</p>
        { trunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p>N é trunfo</p>}
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
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
