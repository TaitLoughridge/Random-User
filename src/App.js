import React, { Component } from 'react';
import RandomUser from './components/RandomUser';
import 'bulma/css/bulma.css'
import './App.css';
import { Container } from 'bloomer/lib/layout/Container';
import { Button } from 'bloomer/lib/elements/Button';
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader';
import { CardContent } from 'bloomer/lib/components/Card/CardContent';

class App extends Component {
  state = {
    userData: [],
  };

    loadData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=12');
      const data = await response.json();
      return data;
    }

      handleClick = async () => {
        const userData = await this.loadData();
    
          this.setState({
            userData: userData.results,
          });
      };
  
  async componentDidMount() {
    const userData = await this.loadData();
    
    this.setState({
      userData: userData.results,
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="App">
        <Container isFluid>
        <HeroHeader className="App-header is-dark">
          <h1>Random User</h1>
        </HeroHeader>
        
        {this.state.userData.length ? (
          <RandomUser userData={userData} />
        ) : (
          <p>No User Data Loaded!</p>
        )}
        
        <Button className="button is-dark is-small" onClick={this.handleClick}>Load More Users</Button>
        </Container>
      </div>
    );
  }
}

export default App;
