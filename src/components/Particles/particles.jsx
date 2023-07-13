(async () => {
    await loadPolygonPath(tsParticles);
  
    await tsParticles.load({
      particles: {
        color: {
          value: "#30B5E2",
          animation: {
            enable: true,
            speed: 1
          }
        },
        move: {
          attract: {
            enable: false,
            distance: 100,
            rotate: {
              x: 2000,
              y: 2000
            }
          },
          direction: "none",
          enable: true,
          outModes: {
            default: "none"
          },
          path: {
            clamp: false,
            enable: true,
            delay: {
              value: 0
            },
            generator: "polygonPathGenerator",
            options: {
              sides: 6,
              turnSteps: 30,
              angle: 30
            }
          },
          random: false,
          speed: 5,
          straight: false,
          trail: {
            fillColor: "#000",
            length: 20,
            enable: true
          }
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 0
        },
        opacity: {
          value: 1
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 2
        }
      },
      background: {
        color: "#000"
      },
      fullScreen: {
        zIndex: -1
      },
      emitters: {
        direction: "none",
        rate: {
          quantity: 1,
          delay: 0.25
        },
        size: {
          width: 0,
          height: 0
        },
        position: {
          x: 50,
          y: 50
        }
      }
    });
  })();
  