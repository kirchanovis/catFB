import React, { Component } from 'react'

class Cat extends Component {
  showDesc () {
    if (this.props.data.empty) {
      return (
        <span className='block-down__text block-down__text_empty'>
          Печалька, {this.props.data.additive} закончился.
        </span>
      )
    } else if (this.props.data.buy) {
      return (
        <span className='block-down__text'>
          <input className='block-down__input' type='text' value={this.props.data.desc} onChange={this.props.onChange} />
        </span>
      )
    } else {
      return (
        <span className='block-down__text'>
          Чего сидишь? Порадуй котэ,
          <span onClick={this.props.onClick} className='block-down__link' > купи.</span>
        </span>
      )
    }
  }
  render () {
    return (
      <div className='block'>
        <div className={`block__main ${this.props.data.buy ? 'buy' : ''} ${this.props.data.empty ? 'empty' : ''} ${this.props.data.hover ? 'hover' : ''}`}
          onClick={this.props.onClick}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}>
          <div className="block__mouse"></div>
          <div className='block__aux'>
            <p className='block__adv' >{this.props.data.hover && this.props.data.buy ? (<span className='block__adv_hover'>Котэ не одобряет?</span>) : 'Сказочное заморское яство' }</p>
            <h1 className='block__title'>Нямушка </h1>
            <p className='block__additive'>{this.props.data.additive}</p>
            <p className='block__portions'>
              <span className='block__portions_bold'>{this.props.data.portions}</span> порций<br /> {this.props.data.auxportions}
            </p>
            <div className='block__cat' />
            <div className={`block__weight weight ${this.props.data.buy ? 'buy' : ''} ${this.props.data.hover ? 'hover' : ''} ${this.props.data.empty ? 'empty' : ''}`} >
              <p className='weight__kg'>{this.props.data.kg}</p>
              <p className='weight__text'>кг</p>
            </div>
          </div>
        </div>
        <div className='block-down'>{this.showDesc()}</div>
      </div>
    )
  }
}

export default Cat
