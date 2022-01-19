import React from 'react';
import './App.css';
import DogCard from './DogCard'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dogs: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/malamute/images")
      .then(res => res.json())
      .then(
        (result) => {
          const dogs = result.message.map(link => ({ imageLink: link, isLiked: false, isVisible: true }));
          this.setState({
            isLoaded: true,
            dogs: dogs
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  clickDog(dog) {
    dog.isLiked = !dog.isLiked
    this.setState({
      dogs: this.state.dogs
    });
  }

  hideNotLikedDogs() {
    this.state.dogs.forEach(dog => {
      dog.isVisible = dog.isLiked;
    });

    this.setState({
      dogs: this.state.dogs
    });
  }

  showAllDogs() {
    this.state.dogs.forEach(dog => {
      dog.isVisible = true;
    });

    this.setState({
      dogs: this.state.dogs
    });
  }

  dislikeAllDogs() {
    this.state.dogs.forEach(dog => {
      dog.isLiked = false;
    });

    this.setState({
      dogs: this.state.dogs
    });
  }

  render() {
    const { error, isLoaded, dogs } = this.state;
    if (error) {
      return <div>Błąd: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Ładowanie...</div>;
    } else {
      return (
        <div>
          <div class="btn-group sticky flex-container">
            <button onClick={() => this.hideNotLikedDogs()}>Pokaż tylko ulubione psy</button>
            <button onClick={() => this.showAllDogs()}>Pokaż wszystkie psy</button>
            <button onClick={() => this.dislikeAllDogs()}>Odlajkuj wszystkie psy</button>
          </div>


          <div className='dogsContainer'>

            {dogs.map(dog => (
              <DogCard
                imageLink={dog.imageLink}
                isLiked={dog.isLiked}
                isVisible={dog.isVisible}
                onClick={() => this.clickDog(dog)} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
