using System.Collections.Generic;

namespace LeetCode.Models
{
    public class TreeNode 
    {
        public int val;
        public TreeNode left;
        public TreeNode right;
        public TreeNode(int x) { val = x; }

        public int[] InOrderOutput(TreeNode root)
        {
            List<int> output = new List<int>();
            InOrderTraversal(root, output);
            return output.ToArray();
        }

        private void InOrderTraversal(TreeNode root, List<int> output)
        {
            if (root == null) return;
            InOrderTraversal(root.left, output);
            output.Add(root.val);
            InOrderTraversal(root.right, output);
        }
    }

}