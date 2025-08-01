// ✅ Inorder Traversal (Recursive)
var inorderTraversal = function(root) {
    let res = [];
    traverse(res, root);
    return res;
};

function traverse(res, root) {
    if (root === null) return;

    traverse(res, root.left);
    res.push(root.val);
    traverse(res, root.right);
}

// ✅ Zigzag Level Order Traversal (BFS with Direction Toggle)
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let level = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        res.push(level);
        leftToRight = !leftToRight; // toggle direction
    }

    return res;
};

// ✅ Binary Tree Paths (Root-to-Leaf All Paths)
var binaryTreePaths = function(root) {
    let res = [];
    path(res, "", root);
    return res;
};

function path(res, pathStr, root) {
    if (!root) return;

    pathStr += root.val;

    if (!root.left && !root.right) {
        res.push(pathStr); // leaf node
        return;
    }

    pathStr += "->";

    path(res, pathStr, root.left);
    path(res, pathStr, root.right);
}
