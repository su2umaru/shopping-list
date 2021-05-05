import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <label>
      買う物：
      <input type='text' value={props.value} onChange={props.handleChange} />
    </label>
    <input type='submit' value='追加' disabled={props.value ? false : true} />
  </form>
);

const List = (props) => (
  <ul>
    {props.items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

function ShoppingList() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    items.push(value);
    setItems(items);
    setValue('');
    e.preventDefault();
  };

  return (
    <div>
      <h1>買い物リスト</h1>
      <Form
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
      />
      <List items={items} />
    </div>
  );
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));
