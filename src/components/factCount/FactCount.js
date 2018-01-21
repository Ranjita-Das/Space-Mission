import React from 'react'
import  {Component} from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import styles from './FactCount.css.js'


export class FactCount extends Component{
  percentCalc(score, goal){
    return this.decimalToPercent(score/goal)
  }

  decimalToPercent(fraction){
    return fraction*100
  }

  render(){
    return(
      <div style={{fontColor:'black'}}>
          <h1 style={styles.title}>Facts Count</h1>

          <div className="facts">
            {this.props.facts.map(
              (fact,i)=>
                <div>{fact.id}.{fact.fact}</div>
            )}
          </div>

          <div>
            <h2>No. of facts collected : {this.props.facts.length}</h2>
            <h2>Goal number of facts to be reached: 25</h2>
            <h2>Progress percentage: {this.percentCalc(this.props.facts.length, 25)}%</h2>
          </div>
      </div>
    )
  }
}
