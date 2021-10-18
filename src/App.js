import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.isSaveButtonDisabled(); });
  }

  onSaveButtonClick() {
    const inputName = document.getElementsByName('cardName');
    const inputDescription = document.getElementsByName('cardDescription');
    const inputImage = document.getElementsByName('cardImage');
    const inputCardAttr1 = document.getElementsByName('cardAttr1');
    const inputCardAttr2 = document.getElementsByName('cardAttr2');
    const inputCardAttr3 = document.getElementsByName('cardAttr3');
    const inputRare = document.getElementsByName('cardRare');
    inputName[0].value = '';
    inputDescription[0].value = '';
    inputImage[0].value = '';
    inputCardAttr1[0].value = 0;
    inputCardAttr2[0].value = 0;
    inputCardAttr3[0].value = 0;
    inputRare[0].value = 'normal';
  }

  isSaveButtonDisabled() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const MAX_ATTR = 90;
    const MAX_SUM_ATTR = 210;
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === ''
    || cardAttr1 > MAX_ATTR
    || cardAttr2 > MAX_ATTR
    || cardAttr3 > MAX_ATTR
    || cardAttr1 < 0
    || cardAttr2 < 0
    || cardAttr3 < 0
    || (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > MAX_SUM_ATTR
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ Number(cardAttr1) }
          cardAttr2={ Number(cardAttr2) }
          cardAttr3={ Number(cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ Number(cardAttr1) }
          cardAttr2={ Number(cardAttr2) }
          cardAttr3={ Number(cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
