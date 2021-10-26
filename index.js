function findMax(list) {
  let current = list.head;
  let max = current.data;
  while (current.getNextNode() !== null) {
    current = current.getNextNode();
    let val = current.data;
    if (val > max) {
      max = val;
    }
  }
  return max;
}

function sortLinkedList(list) {
  let newList = new LinkedList();
  while (list.head !== null) {
    let currentMax = findMax(list);
    list.remove(currentMax);
    newList.addToHead(currentMax);
  }
  return newList;
}
 
