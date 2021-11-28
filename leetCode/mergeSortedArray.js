
//https://leetcode.com/problems/merge-sorted-array/submissions/

/*var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);

  if (n === 0) {
    nums1;
  } else {
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
  }
};*/

var merge = function(nums1, m, nums2, n) {
    let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
    while (idx2 >= 0) {
      nums1[idx3--] = nums1[idx1] > nums2[idx2]
        ? nums1[idx1--]
        : nums2[idx2--];
    }
  };

console.log(merge([1,2,3,0,0,0],3,[4,5,3],3))
