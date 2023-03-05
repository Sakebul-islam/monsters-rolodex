import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id * 3}?set=set2&size=252x252`}
          alt={`monster ${name}`}
        />
        <div className="card-content">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}
export default Card;
