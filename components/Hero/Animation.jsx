import { useCallback, useEffect, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const Animation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  useEffect(() => {
    particlesLoaded();
  }, [particlesLoaded]);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          onDiv: {
            elementId: 'element-id',
            enable: true,
            mode: 'bubble',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100, // Adjust as needed
            duration: 0.4, // Adjust as needed
          },
          // bubble: {
          //   distance: 200,
          //   size: 80,
          // },
        },
      },
      particles: {
        color: {
          value: '#046158',
        },
        links: {
          color: '#009688',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80, // Adjust as needed
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
