//https://leetcode.com/problems/invert-binary-tree/

function invertTree(head) {
    const stack = [head];
    while (stack.length) {
        const node = stack.pop();
        if (node != null) {
           [node.right,node.left]=[node.left,node.right];
            stack.push(node.left,node.right);
        }
    }
    return head;
};

/*
 const invertTree=(root)=>{
    if(!root) return root;
    [root.left, root.right]=[invertTree(root.right),invertTree(root.left)]
    return root;
}
*/