import React from 'react';
import './index.css';

const ArchivedUnit = ({isArchived,name}) => {
  return (
    <div className={`archivedunits ${isArchived ? 'archived' : ''}`}>
        {name}
    </div>
  )
}

export default ArchivedUnit;