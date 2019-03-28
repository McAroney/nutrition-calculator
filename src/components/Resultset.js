import React, { Component } from 'react'
import { Consumer } from '../Context'
import Resultcard from './Resultcard'

class Resultset extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          const { results } = value
          return (
            <div className='result-list'>
              {results.map(result => (
                <Resultcard key={result.id} result={result} />
              ))}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Resultset
