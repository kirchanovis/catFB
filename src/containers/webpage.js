import React, { Component } from 'react'
import Title from '../components/title'
import Cat from '../components/cat'

class Webpage extends Component {
    render() {
      return (
        <div>
          <div className="bg-body"></div>
          <div className="container">
            <Title />
            <div className="blocks"> 
              <Cat />
              <Cat />
              <Cat />
            </div>
          </div>
        </div>
      )
    }
  }

  export default Webpage