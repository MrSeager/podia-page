import React from 'react';
import { useTrail, useSpring, a } from '@react-spring/web';

export const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 25, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    transform: open
      ? 'translateX(0px) translateY(0px)'
      : 'translateX(-30px) translateY(-50px)',
    from: { opacity: 0, transform: 'translateX(-30px) translateY(-50px)' },
  });

  return (
    <>
      {trail.map((style, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  );
};

export const useBgAnimation = () => {
  return useSpring({
    from: { backgroundColor: "#fdfbf9" },
    to: async (next) => {
      while (true) {
        await next({ backgroundColor: "#fdfbf9" });
        await next({ backgroundColor: "#ffffff" });
        await next({ backgroundColor: "#f5efeb" });
      }
    },
    config: { duration: 3000 },
  });
};

export const useSlide = (inView: boolean, direct: number ) => {
    return useSpring({
        from: { opacity: 0, scale: 0, transform: `translateX(${direct}px) translateY(-500px)` },
        to: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0, transform: inView ? 'translateX(0) translateY(0)' : `translateX(${direct}px) translateY(-500px)` },
        config: { tension: 2000, friction: 200 },
    })
}
