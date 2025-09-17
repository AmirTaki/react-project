import React, { useState } from 'react';

function ScrollTracker() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div>
      <p>Scroll Top: {scrollTop}px</p>
      <div
        onScroll={handleScroll}
        style={{
          height: '200px',
          overflowY: 'scroll',
          border: '1px solid #ccc',
        }}
      >
        {[...Array(50)].map((_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
    </div>
  );
}

export default ScrollTracker;
