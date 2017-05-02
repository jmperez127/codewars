function loop_size(node) {
  while (node.val !== undefined) {
    delete node.val;
    node = node.getNext();
  }

  let i = 0;
  while (node.val === undefined) {
    node.val = i++;
    node = node.getNext();
  }
  return i - node.val;
}


export default loop_size