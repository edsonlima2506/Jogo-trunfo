/* eslint-disable react-redux/no-unused-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { card } = this.cardName;
    let { oninput } = this.onInputChange;
    oninput = () => {
      'Houve mudança';
    };
    return (
      <form action="">
        <input
          type="text"
          data-testid="name-input"
          value={ card }
          onChange={ oninput }
        />
        <input type="textarea" data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />

        <select data-testid="rare-input">
          <option value="normal" id="normal">Normal</option>
          <option value="raro" id="normal">Raro</option>
          <option value="muito raro" id="normal">Muito raro</option>
        </select>

        <input type="checkbox" data-testid="trunfo-input" />
        <button data-testid="save-button" type="submit">Criar</button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
