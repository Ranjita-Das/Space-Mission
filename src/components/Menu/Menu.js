import {Link} from 'react-router'
import React from 'react'
import {render} from 'react-router'
import styles from './Menu.css.js'

export const Menu =()=>(
  <div style={styles.menuBackground}>
    <div style={styles.menu}>
      <Link to="/" style={styles.link} activeClassName="selected">
        <h3>Home</h3>
      </Link>
      <Link to="fact-count" style={styles.link} activeClassName="selected">
        <h3>Fact Count</h3>
      </Link>
      <Link to="add-fact" style={styles.link} activeClassName="selected">
        <h3>Add Facts</h3>
      </Link>
    </div>
    </div>

)
