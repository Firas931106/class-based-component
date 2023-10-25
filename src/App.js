import React, { Component } from 'react';
import firas from './firas.jpg'

class App extends Component {
  state = {
    person: {
      fullName: "Firas",
      bio: "I am a developer.",
      imgSrc: firas,
      profession: "Software Engineer",
    },
    shows: false,
    timeInterval: 0
  }
 

  componentDidMount() {
    this.timer = setInterval(() => 
      this.setState({timeInterval:this.state.timeInterval+1}) , 1000)}        
    

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !this.state.shows
    }))
  }

  render() {

    return (
      <div>
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {this.state.shows && (
          <div className='personeProfile'>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="avatar" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>
          Time interval since component mounted: {this.state.timeInterval} 
        </p>
      </div>
    );
  }
}

export default App;