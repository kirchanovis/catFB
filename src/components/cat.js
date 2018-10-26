import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div className="block">
        <div className="block__main">
          <div className="block__aux">
            <p className="block__adv">Сказочное заморское яство</p>
            <h1 className="block__title">Нямушка</h1>
            <p className="block__additive">с фуа-гра</p>
            <p className="block__portions"><span className="block__portions_bold">10</span> порций<br/> мышь в подарок</p>
            <div className="block__cat"></div>
            <div className="block__weight weight">
              <p className="weight__kg">0,5</p>
              <p className="weight__text">кг</p>
            </div>
          </div>
        </div>
        <div className="block-down"><span className="block-down__text">Чего сидишь? Порадуй котэ, <a href="#" className="block-down__link" >купи.</a></span></div>
      </div>
    )
  }
}

export default Cat