import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onSaveButtonClick,
      onInputChange } = this.props;

    return (
      <form action="">
        <input
          type="text"
          data-testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          placeholder="Nome da carta"
        />
        <input
          type="textarea"
          data-testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          placeholder="Descrição da carta"
        />
        <input
          type="number"
          data-testid="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          type="text"
          data-testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          placeholder="Link da imagem"
        />
        <select
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal" id="normal">Normal</option>
          <option value="raro" id="normal">Raro</option>
          <option value="muito raro" id="normal">Muito raro</option>
        </select>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onChange={ onInputChange }
          onClick={ onSaveButtonClick }
        >
          {' '}
          Criar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
