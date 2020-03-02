import { IResults } from '../../api/search'
import React, { useState } from 'react'
import classNames from 'classnames'

interface IItemProps {
  result: IResults
  onClick: (value: string) => void
}

export const Item = ({ result, onClick }: IItemProps) => {
  const { name, placeType, city, country, iata, region } = result
  const [classOnFocus, setClassOnFocus] = useState<string>('')
  const locationName = [name, iata].filter(el => el).join(' ')
  const locationCity = [city, region, country].filter(el => el).join(', ')

  const handleEventOnActive = () => setClassOnFocus('item--focus')
  const handleEventOnInactive = () => setClassOnFocus('')
  const handleOnClick = () => onClick(locationName)
  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick(locationName)
    }
  }

  return (
    <li
      className={classNames('item', classOnFocus)}
      tabIndex={0}
      onMouseOver={handleEventOnActive}
      onMouseLeave={handleEventOnInactive}
      onFocus={handleEventOnActive}
      onBlur={handleEventOnInactive}
      aria-label={name}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
    >
      {placeType &&
        <>
          <div className="item__place">
            <span className="item__pill">{placeType}</span>
          </div>
          <div className="item__location">
            <span className="item__location-name">{locationName}</span>
            <span className="item__location-city">{locationCity}</span>
          </div>
        </>
       }
      {!placeType &&
        <div className="item__place">
          {name}
        </div>
      }
    </li>
  )
}
