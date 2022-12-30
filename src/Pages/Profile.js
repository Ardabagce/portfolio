import React, { Component } from 'react'
import {auth} from '../firebase.config'

export default class Profile extends Component {
  render() {
    const name = auth.currentUser
    return (
      <div>
          {name ? <h1>{name.email}</h1> : <h1>No user Logged in</h1>}
          {name ? <h1>{name.photoURL}</h1> : <h1>No user Logged in</h1>}
      </div>
    )
  }
}