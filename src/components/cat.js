import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div>
        <div className="block">
          <p className="block__adv">Сказочное заморское яство</p>
          <h1 className="block__title">Нямушка</h1>
          <p className="block__additive">с фуа-гра</p>
          <p className="block__portions">10 порций мышь в подарок</p>
          <div className="block__cat"></div>
          <div className="block__weight weight">
            <p className="weight__kg">0,5</p>
            <p className="weight__text">кг</p>
          </div>
        </div>
        <div className="block-down">Чего сидишь? Порадуй котэ, купи.</div>
      </div>
    )
  }
}

export default Cat