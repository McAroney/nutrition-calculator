import React, { Component } from 'react'
import app from 'firebase/app'

var config = {
  // ...
  apiKey: 'AIzaSyCrpQa2oRH1nzmWhkKrMYZ9KAjAPJvXs1U',
  authDomain: 'nutrition-calculator-7ef5d.firebaseapp.com',
  databaseURL: 'https://nutrition-calculator-7ef5d.firebaseio.com',
  storageBucket: 'bucket.appspot.com'
}

export default class Firebase extends Component {
  constructor () {
    app.initializeApp(config)
  }
}
