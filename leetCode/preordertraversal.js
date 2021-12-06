//https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function(root) {
    let arr = visitNode(root, []);
    return arr;
 };
 
 var visitNode = function(root, arr){
     if (!root) {
         return [];
     }
     
     if (root.val){
         arr.push(root.val);
     }
     
     if (root.left){
         visitNode(root.left, arr);
     }
     
     if (root.right){
         visitNode(root.right, arr);
     }
     
     return arr;
 }