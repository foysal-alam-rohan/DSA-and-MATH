{
    class Node  {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    class BinaryTree {
        constructor() {
            this.root = null;
        }

        isBST() {
            function bstHelper(node, min, max) {
                if(node === null) return true;
                if((min !== null && node.data <= min) || (max !== null && node.data >= max)) return false;
                return bstHelper(node.left, min, node.data) && bstHelper(node.right, node.data, max);
            }
            return bstHelper(this.root, null, null);
        }

        searchRecursive(node, target) {
            if(!node) return false;
            if(node.data === target) return true;
            return this.searchRecursive(node.left, target) || 
            this.searchRecursive(node.right, target);
        }

        searchBST(node, target) {
            if(!node) return false;
            if(node.data === target) return true;
            if(target < node.data) {
                return this.searchBST(node.left, target);
            } else {
                return this.searchBST(node.right, target);
            }
        }

        delete(data) {
            function deleteHelper(node, data) {
                if(!node) return null;
                if(data < node.data) {
                    node.left = deleteHelper(node.left, data)
                } else if (data > node.data){
                    node.right = deleteHelper(node.right, data);
                } else {
                    if(!node.left && !node.right) {
                        return null;
                    } else if (!node.left) {
                        return node.right;
                    } else if (!node.right) {
                        return node.left;
                    } else {
                        let successor = node.right;
                        while(successor.left) {
                            successor = successor.left;
                        }
                        node.data = successor.data;
                        node.right = deleteHelper(node.right, successor.data);
                    }
                }
                return node;
            }
            this.root = deleteHelper(this.root, data);
        }

        inOrder(node = this.root) {
            if(!node) return [];
            return [...this.inOrder(node.left), node.data, ...this.inOrder(node.right)];
        }

    }

    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(6);
    tree.root.right = new Node(12);
    tree.root.right.left = new Node(11);
    tree.root.right.right = new Node(13);

    const isTreeBST = tree.isBST();
    

    console.log("Recursive search", tree.searchRecursive(tree.root, 10));
    console.log("Search Bst", tree.searchBST(tree.root, 20));

    console.log("Inorder before delete", tree.inOrder());

    tree.delete(12);

    console.log("Inorder after delete", tree.inOrder());

    console.log(`Is this tree a binary tree? ${isTreeBST}`);
}