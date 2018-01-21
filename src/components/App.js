import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'

import {Background} from './background/Background'
import {Title} from './title/Title'
import {Grid} from './grid/Grid'
import {Rocket} from './rocket/Rocket'
import {Smoke} from './smoke/Smoke'

import styles from './App.css.js'
import facts from './NASA_facts.json'
import {Menu} from './Menu/Menu'
import {FactCount} from './factCount/FactCount'

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      facts
    }
  }

  updateClicked(id)
  {
    let stateCopy =Object.assign({}, this.state);
    stateCopy.facts[id].clicked =true;
    this.setState(stateCopy);
  }

  render(){
    return(
      <div className="app">
        <Menu />
          <div>
            {(this.props.location.pathname==="/")?
              <div className="FactsPage" style={styles.centerAligned}>
                <Background />
                <Title />
                <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
                <Rocket />
                <Smoke />
              </div> :
              (this.props.location.pathname==='/fact-count')?
              <div className="FactsCount">
                <FactCount facts={this.state.facts}/>
              </div>:
              <div className="AddFacts">this is the add fact page</div>
            }
          </div>
      </div>
    )
  }
}
