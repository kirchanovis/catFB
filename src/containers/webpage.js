import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Title from '../components/title'
import Cat from '../components/cat'
import {chooseFeed, mouseOverFeed, mouseoutFeed, updateDescription} from '../store/actions'

class Webpage extends Component {
    onChange (event) {
      this.props.update(event.target.value)
    }
    render() {
      return (
        <div className="v-center">
          <div className="bg-body"></div>
          <div className="container">
            <div className="blocks">
              <Title />
              {this.props.feeds.map( (feed) => 
                <Cat data={feed} onClick={() => this.props.choose(feed.id) } onMouseOver={() => this.props.over(feed.id)} onMouseOut={() => this.props.out(feed.id) } onChange={this.onChange.bind(this)} />
              )}
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
  return bindActionCreators({choose: chooseFeed,over: mouseOverFeed, out: mouseoutFeed, update: updateDescription},dispatch)
}
  
  
export default connect(mapStateToProps, matchDispatchToProps)(Webpage);