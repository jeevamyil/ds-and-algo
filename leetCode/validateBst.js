//https://leetcode.com/problems/validate-binary-search-tree/

const isValid = (root, low, high) => {
    if(!root) {
        return true;
    }
    if(root.val <= low || root.val >= high) {
        return false;
    }
    return (isValid(root.left, low, root.val) && isValid(root.right, root.val, high));
    
}

const isValidBST = (root) => {
    return isValid(root, -Infinity, Infinity);
};