import { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ expiryDate }) => {
  const calculateTimeLeft = () => {
    const now = moment();
    const expirationTime = moment(expiryDate);
    const duration = moment.duration(expirationTime.diff(now));

    const days = duration.days().toString().padStart(2, '0');
    const hours = duration.hours().toString().padStart(2, '0');
    const minutes = duration.minutes().toString().padStart(2, '0');
    const seconds = duration.seconds().toString().padStart(2, '0');

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className='timer-container'>
        <div className='timer-box-container'>
            <div className='timer-box'>{timeLeft.days}</div>
            <div className='timer-text'>Days</div>
        </div>
        <div className='timer-box-container'>
            <div className='timer-box'>{timeLeft.hours}</div>
            <div className='timer-text'>Hours</div>
        </div>
        <div className='timer-box-container'>
            <div className='timer-box'>{timeLeft.minutes}</div>
            <div className='timer-text'>Mins</div>
        </div>
        <div className='timer-box-container'>
            <div className='timer-box'>{timeLeft.seconds}</div>
            <div className='timer-text'>Sec</div>
        </div>
    </div>
  );
};

export default Timer;
