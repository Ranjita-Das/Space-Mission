import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'

import styles from './Smoke.css.js'

export const Smoke =()=>(
      <div style={styles.smoke}>
        <video style={styles.video} autoPlay loop src='./smoke.mov' />
      </div>
    )
