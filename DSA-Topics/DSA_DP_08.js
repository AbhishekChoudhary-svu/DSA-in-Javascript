/// Tree DP


const diameterOfTree = (root) => {
  let res = 0;
  function solve(root) {
    if (root === null) return 0;

    let l = solve(root.left);
    let r = solve(root.right);

    let temp = Math.max(l, r) + 1;

    res = Math.max(res, 1 + l + r);

    return temp;
  }
  solve(root);
  return res;
};

const maxPathSumtoAnyNode = (root) => {
  let res = 0;
  function solve(root) {
    if (root === null) return 0;

    let l = Math.max(0, solve(node.left));
    let r = Math.max(0, solve(node.right));

    let temp = Math.max(l, r) + root.value;

    res = Math.max(res, root.value + l + r);

    return temp;
  }
  solve(root);
  return res;
};

const maxPathSumtoLeafNode = (root) => {
  function solve(root) {
    if (root === null) return 0;

    if (!root.left && !root.right) return root.value;

    let l = solve(root.left);
    let r = solve(root.right);

    let temp = Math.max(l, r) + root.value;

    return temp;
  }
  return solve(root);
};
