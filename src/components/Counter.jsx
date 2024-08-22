import React, { useState, useEffect } from 'react';

const Counter = ({ count, label,color }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCount < count) {
        setCurrentCount(currentCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 3000 / count); 

    return () => clearInterval(interval);
  }, [count, currentCount]);

  return (
    <div className={`flex flex-col items-center justify-center ${color} rounded-[150px] w-[150px] h-[150px] text-whiteBackground mx-[50px]`}>
      <h2 className="text-3xl font-bold">{currentCount}</h2>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default Counter;
