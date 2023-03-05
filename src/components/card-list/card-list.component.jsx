import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    // console.log(this.props);
    // console.log(this.props.monsters);
    // console.log('render from cardlist');
    const { monsters } = this.props;
    return (
      //   <div>
      //     <h1>Hello, I am the CardList Component</h1>
      //   </div>
      <div className="card-list">
        {monsters.map(monster => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
