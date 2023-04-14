// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findWithin(this.rootNode, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findWithin(node.right, data);
      } else {
        return findWithin(node.left, data);
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return node;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here\
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');.
    // remove line with error and write your code here
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// assert.strictEqual(tree.root(), null);
// console.log(tree.root)
// const anime = new BinarySearchTree();
// anime.add(5);
// console.log(anime.has(5))

