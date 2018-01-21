import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'
import Badge from './Badge.js'
import Explorer from './Explorer.js'

import GridStyles from './Grid.css.js'
import GridItemStyles from './GridItem.css.js'

export class Grid extends Component{

  render(){
    return(
      <div style={GridStyles.grid}>
        {this.props.facts.map(
          (item,i)=>
            <div style={GridItemStyles.card} onClick={()=>this.props.updateClicked(item.id)}>
              {item.clicked ? <Explorer /> : <Badge />}
              <h2 style={GridItemStyles.title}>{item.id}. {item.title}</h2>
              <article style={GridItemStyles.fact}>{item.fact}</article>
            </div>
        )}
      </div>
    )
  }
}
