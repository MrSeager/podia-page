import { FC, Children } from 'react';
import { useTrail, useSpring, a } from '@react-spring/web';

export const Trail: FC<{ open: boolean; children: React.ReactNode, direct: number, del: number }> = ({ open, children, direct, del }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    transform: open
      ? 'translateX(0px)'
      : `translateX(${direct}px)`,
    clipPath: open
      ? 'inset(0% 0% 0% 0%)'
      : 'inset(0% 0% 200% 0%)',
    from: { 
      transform: `translateX(${direct}px)`, 
      clipPath: 'inset(0% 0% 200% 0%)' },
    delay: del
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
        from: { 
          transform: `translateX(${direct}px)`,
          clipPath: 'inset(0% 0% 200% 0%)'
        },
        to: { 
          transform: inView ? 'translateX(0px)' : `translateX(${direct}px)`,
          clipPath: inView ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 200% 0%)'
        },
        config: { tension: 2000, friction: 300 },
    })
};
