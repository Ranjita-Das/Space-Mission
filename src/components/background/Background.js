import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'

import styles from './Background.css.js'

export class Background extends Component {
  render(){
    return(
      <div>
        <div>
          <div style={styles.stars}></div>
          <div style={styles.nebula}></div>
        </div>
      </div>
    )
  }
}
