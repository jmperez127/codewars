import PRESET_COLORS from '../external/colorPresets';

function parseHTMLColor(color) {
  const hex = {a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};
  const hexToInt = (c) => {
    let nums = c.split('').map((n) => hex.hasOwnProperty(n.toLocaleLowerCase()) ? hex[n.toLocaleLowerCase()] : parseInt(n));
    return parseInt(nums[1] + (nums[0] * 16));
  };
  
  if (PRESET_COLORS.hasOwnProperty(color.toLowerCase())) color = PRESET_COLORS[color.toLowerCase()];
  if (color.length <= 4) color = color.split('').map((n) => n.toString() + n.toString()).join('');

  let rgb = color.match(/[a-zA-Z0-9]{2}/g).map(hexToInt);
  return {r: rgb[0], g: rgb[1], b: rgb[2]}
}

export default parseHTMLColor