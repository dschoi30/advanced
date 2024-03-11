import React, { useEffect, useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div 
      className='container' 
      onPointerMove={e => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        //* 스프레드 연산자로 기존의 값을 가져오고, x만 변경
        setPosition((prev) => ({ ...prev, x: e.clientX }))
      }}
    >
    <div 
      className='pointer' 
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    </div>
  );
}

