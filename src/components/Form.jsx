/* eslint-disable react-redux/no-unused-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName: card,
      cardDescription: description,
      cardAttr1: atr1,
      cardAttr2: atr2,
      cardAttr3: atr3,
      cardImage: image,
      cardRare: rare,
      cardTrunfo: trunfo,
      isSaveButtonDisabled: buttonDisable,
      onSaveButtonClick: buttonEnable,
      onInputChange: inputChange,
    } = this.props;

    return (
      <form action="">
        <input
          type="text"
          data-testid="name-input"
          value={ card }
          onChange={ inputChange }
        />
        <input
          type="textarea"
          data-testid="description-input"
          value={ description }
          onChange={ inputChange }
        />
        <input
          type="number"
          data-testid="attr1-input"
          value={ atr1 }
          onChange={ inputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          value={ atr2 }
          onChange={ inputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          value={ atr3 }
          onChange={ inputChange }
        />
        <input
          type="text"
          data-testid="image-input"
          value={ image }
          onChange={ inputChange }
        />
        <select
          data-testid="rare-input"
          value={ rare }
          onChange={ inputChange }
        >
          <option value="normal" id="normal">Normal</option>
          <option value="raro" id="normal">Raro</option>
          <option value="muito raro" id="normal">Muito raro</option>
        </select>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ trunfo }
          onChange={ inputChange }
        />
        <button
          data-testid="save-button"
          type="submit"
          disabled={ buttonDisable }
          onChange={ inputChange }
          onClick={ buttonEnable }
        >
          Criar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
