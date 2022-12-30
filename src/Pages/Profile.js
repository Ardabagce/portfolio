import React, { Component } from 'react'
import {auth} from '../firebase.config'

export default class Profile extends Component {
  render() {
    const user = auth.currentUser
    return (
      <div>
          {user ? <h1>{user.email}</h1> : <h1>No user Logged in</h1>}
      </div>
    )
  }
}