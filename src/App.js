import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import savedCards from './Data';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (target.type === 'checkbox') {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState({
      [name]: value,
    }, () => { this.isSaveButtonDisabled(); });
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    savedCards.push({
      name: cardName,
      description: cardDescription,
      image: cardImage,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      rare: cardRare,
      trunfo: cardTrunfo,
    });
    console.log(savedCards);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
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
    || Number(cardAttr1) > MAX_ATTR
    || Number(cardAttr2) > MAX_ATTR
    || Number(cardAttr3) > MAX_ATTR
    || Number(cardAttr1) < 0
    || Number(cardAttr2) < 0
    || Number(cardAttr3) < 0
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
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div>
        <header>
          <h1>Super Trunfo</h1>
          <p>By: Edson Lima</p>
        </header>
        <div className="app">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div className="deck">
          { savedCards.map((card) => (<Card
            key={ card.name }
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
            onSaveButtonClick={ this.onSaveButtonClick }
          />))}
        </div>
      </div>
    );
  }
}

export default App;
