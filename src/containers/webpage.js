import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Title from '../components/title'
import Cat from '../components/cat'
import {chooseFeed, mouseOverFeed, mouseoutFeed} from '../store/actions'

class Webpage extends Component {
    render() {
      return (
        <div className="v-center">
          <div className="bg-body"></div>
          <div className="container">
            <div className="container__center">
              <Title />
              <div className="blocks">
                {this.props.feeds.map( (feed) => 
                  <Cat data={feed} onClick={() => this.props.choose(feed.id) } onMouseOver={() => this.props.over(feed.id)} onMouseOut={() => this.props.out(feed.id)  } />
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

function mapStateToProps (state) {
  return {
    feeds: state.feed
  }
}
  
function matchDispatchToProps (dispatch) {
  return bindActionCreators({choose: chooseFeed,over: mouseOverFeed, out: mouseoutFeed},dispatch)
}
  
  
export default connect(mapStateToProps, matchDispatchToProps)(Webpage);