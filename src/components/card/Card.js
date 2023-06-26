import React from 'react'
import "./card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
const Card = ({title, numbers, status}) => {
  return (
    <>
    {}
    
    <div className="card-single">
      <div className="card-flex">
        <div className="card-info">
          <div className="card-head">
            <span>{title}</span>
            <h2>{numbers}</h2>
            <small>{status}</small>
          </div>
        </div>
        <div className="card-chart">
          <span>
            <FontAwesomeIcon icon={faChartLine} />
          </span>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Card