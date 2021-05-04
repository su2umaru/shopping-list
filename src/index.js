import React from 'react';
import ReactDOM from 'react-dom';

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        買う物：
        <input type='text' value={props.value} onChange={props.handleChange} />
      </label>
      <input type='submit' value='追加' disabled={props.value ? false : true} />
    </form>
  );
}

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const items = this.state.items.slice();
    items.push(this.state.value);
    this.setState({ items: items });
    this.setState({ value: '' });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>買い物リスト</h1>
        <Form
          handleSubmit={this.handleSubmit}
          value={this.state.value}
          handleChange={this.handleChange}
        />
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));
