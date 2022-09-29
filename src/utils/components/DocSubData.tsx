import React from 'react';
import './DocSubData.css';

const DocSubData = ({ componentDescription, usageDescription }) => {
  return (
    <>
      <p className="component-description">{componentDescription}</p>
      <h3 className="usage-title">Usage</h3>
      <p className="usage-description">{usageDescription}</p>
    </>
  )
}

export default DocSubData