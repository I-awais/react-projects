import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexDirection: 'column',
};
const starContainerStyle = {
  display: 'flex',
  gap: '4px',
};

// StarRating.protoTypes ={
//   maxRating: propTypes.number
// }

export default function StarRating({
  maxRating = 5,
  color = '#fcc419',
  size = 48,
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }
  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
      <Box />
      <TrafficLight />
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    cursor: 'pointer',
    display: 'block',
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/

const boxContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  border: '4px solid white',
};
const innerContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: 'px',
  padding: '5px',
  cursor: 'pointer',
};
const box = {
  display: 'flex',
  gap: '20px',
};
function Box() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div style={boxContainer}>
      <div style={innerContainer}>
        {Array.from({ length: 6 }, (_, i) => (
          <span
            style={box}
            key={i + 1}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
          >
            <BoxColor
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            ></BoxColor>
          </span>
        ))}
        <p>{rating}</p>
      </div>
    </div>
  );
}

function BoxColor({ full }) {
  return (
    <>
      {full ? (
        <div
          style={{
            backgroundColor: 'orange',
            height: '40px',
            width: '40px',
            borderRadius: '50%',
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundColor: 'white',
            height: '40px',
            width: '40px',
            borderRadius: '50%',
          }}
        ></div>
      )}
    </>
  );
}

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};

const circle = {
  borderRadius: '50%',
  border: '3px solid black',
  height: '42px',
  width: '42px',
};

const trafficBox = {
  display: 'flex',
  padding: '6px',
  border: '5px solid white',
  gap: '8px',
};
function TrafficLight() {
  const [signalColor, setSignalColor] = useState('green');

  useEffect(() => {
    const { duration, next } = config[signalColor];

    const timerId = setTimeout(() => {
      setSignalColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [signalColor]);

  function handleClick(color) {
    setSignalColor(color);
  }
  return (
    <div style={trafficBox}>
      <p
        style={{
          ...circle,
          backgroundColor: signalColor === 'green' ? signalColor : '',
        }}
        onClick={() => handleClick('green')}
      ></p>
      <p
        style={{
          ...circle,
          backgroundColor: signalColor === 'yellow' ? signalColor : '',
        }}
        onClick={() => handleClick('yellow')}
      ></p>
      <p
        style={{
          ...circle,
          backgroundColor: signalColor === 'red' ? signalColor : '',
        }}
        onClick={() => handleClick('red')}
      ></p>
    </div>
  );
}

// function Light({ backgroundColor }) {
//   return (
//     <div
//       aria-hidden={true}
//       className="traffic-light"
//       style={{ backgroundColor }}
//     />
//   );
// }

// export default function TrafficLight({
//   initialColor = 'green',
//   config,
//   layout = 'vertical',
// }) {
//   const [currentColor, setCurrentColor] = useState(initialColor);

//   useEffect(() => {
//     const { duration, next } = config[currentColor];

//     const timerId = setTimeout(() => {
//       setCurrentColor(next);
//     }, duration);

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [currentColor]);

//   return (
//     <div
//       aria-live="polite"
//       aria-label={`Current light: ${currentColor}`}
//       className={[
//         'traffic-light-container',
//         layout === 'vertical' && 'traffic-light-container--vertical',
//       ]
//         .filter((cls) => !!cls)
//         .join(' ')}>
//       {Object.keys(config).map((color) => (
//         <Light
//           key={color}
//           backgroundColor={
//             color === currentColor ? config[color].backgroundColor : undefined
//           }
//         />
//       ))}
//     </div>
//   );
// }
