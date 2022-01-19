import React from 'react';
import './DogCard.css';
class DogCard extends React.Component {

  render() {
    return (
      <div onClick={this.props.onClick} key={this.props.imageLink + 'dogCard'} className='dogCard' style={this.props.isVisible ? {} : { display: 'none' }}>

        <img          
          key={this.props.imageLink}
          src={this.props.imageLink}
           />

        <img key={this.props.imageLink + 'like'} className='like'
          src={this.props.isLiked ?
            "https://www.freeiconspng.com/thumbs/favorites-icon-png/favorite-heart-icon-png-23.png" :
            "https://www.pinclipart.com/picdir/big/0-6328_heart-empty-font-awesome-heart-icon-transparent-background.png"} />

      </div>)
  }
}

export default DogCard;