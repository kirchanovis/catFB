import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div className="block">
        <div className={`block__main ${this.props.data.buy ? 'buy' : ''} ${this.props.data.empty ? 'empty' : ''} ${this.props.data.hover ? 'hover' : ''}` }
          onClick={this.props.onClick} 
          onMouseOver={this.props.onMouseOver} 
          onMouseOut={this.props.onMouseOut}>
          <div className="block__aux">
            <p className="block__adv" >{this.props.data.hover && this.props.data.buy ? ( <span className="block__adv_hover">Котэ не одобряет?</span> ) : 'Сказочное заморское яство' }</p>
            <h1 className="block__title">Нямушка</h1>
            <p className="block__additive">{this.props.data.additive}</p>
            <p className="block__portions">
              <span className="block__portions_bold">{this.props.data.portions}</span> порций<br/> {this.props.data.auxportions}
            </p>
            <div className="block__cat"></div>
            <div className={`block__weight weight ${this.props.data.buy ? 'buy' : ''} ${this.props.data.hover ? 'hover' : ''} ${this.props.data.empty ? 'empty' : ''}`} >
              <p className="weight__kg">{this.props.data.kg}</p>
              <p className="weight__text">кг</p>
            </div>
          </div>
        </div>
        <div className="block-down"><span className="block-down__text">Чего сидишь? Порадуй котэ, <span onClick={this.props.onClick} className="block-down__link" >купи.</span></span></div>
      </div>
    )
  }
}

export default Cat