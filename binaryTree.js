load("traverse.js");

function Node(data, left, right) {
 this.data = data;
 this.left = left;
 this.count = 1;
 this.right = right;
 this.show = show;
}

function show() {
 return this.data;
}

function BT() {
 this.root = null;
 // Capouch entries
 this.left = true;
 this.height = height;
 // end Capouch entries

 this.inOrder = inOrder;
 this.preOrder = preOrder;
 this.postOrder = postOrder;
 this.getSmallest = getSmallest;
 }

BT.prototype.insert = function(data) {
 var n = new Node(data, null, null);
   if (this.root === null) {
//print('Adding root');
   this.root = n;
   return;
   }
  if (this.left) {
//print ('Adding to right');
    n.right = this.root;
  }
  else {
    n.left = this.root;
// print('Adding to left');
  }
  this.left = (!this.left);
  this.root = n;
}

BT.prototype.find = function(data) {
 // This find will NOT work on an unordered binary tree
 //     and will return null even when the data is in the tree
 //     I left it here for reference, and as a challenge to someone:
 //     See if you can fix it; you will have to modify a traversal method
 var current = this.root;
   while (current && current.data != data) {
     if (data < current.data) {
       current = current.left;
       }
     else {
       current = current.right;
       }
   }
 return current;
}

BT.prototype.update = function(data) {
 var value = this.find(data);
 value.count++;
 return value;
}


// else {
//   var current = this.root;
//   var parent;
//   while (true) {
//     parent = current;
//     if (data < current.data) {
//       current = current.left;
//       if (current === null) {
//         parent.left = n;
//         break;
//         }
//     }
//   else {
//     current = current.right;
//     if (current === null) {
//       parent.right = n;
//       break;
//       }
//     }
//   }
// }
//}

function getSmallest(node) {
   if (node.left == null) {
    return node;
    }
   else {
    return getSmallest(node.left);
    }
}

function height(node) {
  if (node == null) return -1;
  return 1 + Math.max(height(node.left), height(node.right));
  }

  
