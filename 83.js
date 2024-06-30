const deleteDuplicates = (head) => {
  let currentNode = head;
  let nextNode = head.next;

  if (!nextNode) return head;
  while (nextNode) {
    const currentValue = currentNode.val;
    nextNode = currentNode.next;
    nextNodeValue = nextNode.val;

    if (currentValue === nextNodeValue) {
      nextNode = nextNode.next;
      currentNode.next = nextNode;
      continue;
    }

    currentNode = nextNode;
    nextNode = nextNode.next;
  }

  return head;
};
