const snail = (array) => {
  const maxX = array[0].length - 1, maxY = array.length - 1;
  let paddings = {'top': 0, 'right': 0, 'bottom': 0, 'left': 0};

  return (function group(values, array) {
    for (let x = paddings.left; x <= maxX - paddings.right; x++)
      values.push(array[paddings.top][x])
    paddings.top++;

    for (let y = paddings.top; y <= maxY - paddings.bottom; y++)
      values.push(array[y][maxX - paddings.right])
    paddings.right++;

    for (let x = (maxX) - paddings.right; x >= paddings.left; x--)
      values.push(array[(maxY) - paddings.bottom][x]);
    paddings.bottom++;

    for (let y = maxY - paddings.bottom; y >= paddings.top; y--)
      values.push(array[y][paddings.left])
    paddings.left++;

    return values.length < (array.length * array[0].length) ? group(values, array) : values;
  })([], array);
};

export default snail;