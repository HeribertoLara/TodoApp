import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <p className="loader-text">CARGANDO</p>
    </div>
  )
}

export  {Loader}