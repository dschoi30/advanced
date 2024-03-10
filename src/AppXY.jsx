import React, { useEffect, useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => setPointer({ x: e.clientX, y: e.clientY });
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='container' onPointerMove={handleMouseMove}>
      <div 
        className='pointer' 
        style={{
          transform: `translate(${pointer.x}px, ${pointer.y}px)`
        }}
        />
    </div>
  );
}

