export function createGradient(startColor, endColor, steps) {
    // parse RGB values to each {Red, Green, Blue} keys

    let startRGB = hexToRgb(startColor)
    let endRGB = hexToRgb(endColor)
    let gradients = []
    // generate color for each steps provided then push the value to gradients array
    for (let step = 1; step <= steps; step++) {
        let colors = {}

        for (let color of ['red', 'green', 'blue']) {
            colors[color] = colorMaker(
                startRGB[color],
                endRGB[color],
                steps,
                step
            )
        }
        let rgb = `rgb(${colors['red']}, ${colors['green']}, ${colors['blue']})`;
        gradients.push(rgb)

    }

    return gradients
}

function colorMaker(start, end, steps, step) {
    // let redDiff = (start.red > end.red) ? start.red - end.red : end.red - start.red;

    let val
    if (start > end) {
        let singleStep = (start - end) / steps
        val = start - singleStep * step
    } else if (end > start) {
        let singleStep = (end - start) / steps
        val = start + singleStep * step
    } else {
        val = start | end
    }

    return ~~val
}

// strng to object converson
function parseRGB(rgb) {
    let baseSplit = rgb.split('(')[1].split(',')
    let red = parseInt(baseSplit[0], 1)
    let green = parseInt(baseSplit[1], 1)
    let blue = parseInt(baseSplit[2].split(')')[0], 1)

    return { red, green, blue }
}


function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        }
        : null;
}
