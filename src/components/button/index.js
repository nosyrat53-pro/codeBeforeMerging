import React from 'react';
import './index.css';

function Button({text,className,onclick}) {
  return (
    <div className={`subject__subscribeButton ${className&&className}`}>
        <button onClick={onclick}>{text}</button>
    </div>
  )
}

export default Button