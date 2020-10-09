document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 123,
            "density": {
              "enable": true,
              "value_area": 789.1850086415761
            }
          },
          "color": {
            "value": "#4481a2"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 1,
              "color": "#6582ac"
            },
            "polygon": {
              "nb_sides": 7
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5208621057034402,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 31.168831168831172,
              "size_min": 1.5984015984015985,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 144.21690222094043,
            "color": "#ffffff",
            "opacity": 0.2724097041951097,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3.2048200493542316,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "remove"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
}, !1);