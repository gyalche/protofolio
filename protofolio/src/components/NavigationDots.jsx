import React from 'react';

const NavigationDots = (active) => {
  return (
    <div>
      <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : {}}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;
