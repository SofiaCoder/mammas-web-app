'use client';
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2025-04-02`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg'>
      <h1 className='text-xl text-center mb-1'>Mamma!</h1>
      <h2 className='text-center mb-4 sm:mb-6'>
        Din pension innfinner sig om:
      </h2>
      <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit}>
            {value} {unit}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;
