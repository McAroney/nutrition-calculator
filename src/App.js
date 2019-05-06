import React, { Component } from 'react'
import { Provider } from './Context'
import Search from './components/Search'
import Resultset from './components/Resultset'
import Recipe from './components/Recipe'
import Firebase from './Firebase'

import './App.css'

class App extends Component {
  render () {
    return (
      <Firebase>
        <Provider>
          <div className='App'>
            <header className='App-header'>
              <h1>Nutricalc</h1>
              <Search />
              <Resultset />
              <Recipe />
            </header>
          </div>
        </Provider>
      </Firebase>
    )
  }
}

export default App
