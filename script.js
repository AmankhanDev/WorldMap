const svg = document.querySelector('.world_map');
const tooltip = document.querySelector('.tool_tip');
const stateName = document.getElementById('state');
const statePop = document.getElementById('pop');

const Offsetx = -30;
const Offsety = -30;

function toolTipEffect() {
    svg.addEventListener('mousemove', function (event) {
        gsap.to(tooltip, {
            x: event.x - Offsetx,
            y: event.y - Offsety
        });

        if (event.target.tagName === 'path') {
            const title = event.target.getAttribute('title');
            const value = event.target.getAttribute('value');
            if (title) {
                stateName.innerHTML = title;
                statePop.innerHTML = "Population: "+value;
            }
        }
    })

    svg.addEventListener('mouseleave', function (event) {
        gsap.to(tooltip, {
            opacity: 0,
            scale: 0

        })
    })

    svg.addEventListener('mouseenter', function (event) {
        gsap.to(tooltip, {
            opacity: 1,
            scale: 1

        })
    })
}

toolTipEffect()









