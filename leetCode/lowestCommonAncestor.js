//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function(node, p, q) {

    if(!node)return; 
    if(node.val>p.val && node.val>q.val){
        return lowestCommonAncestor(node.left,p,q)
    }
    else if(node.val<p.val && node.val<q.val){
        return lowestCommonAncestor(node.right,p,q)
    }
    return node;

};