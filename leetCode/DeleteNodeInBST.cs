using LeetCode.Models;

namespace LeetCode
{
    public class DeleteNodeInBST 
    {
        public TreeNode DeleteNode(TreeNode root, int key) 
        {
            TreeNode parentNode = null;
            //search
            TreeNode nodeDel = Search(root, key, parentNode);
            //delete
            if (nodeDel.left != null && nodeDel.right != null)
            {
                if (parentNode.left == nodeDel)
                {
                    //parentNode.left = largest node in left subtree
                }
                else
                {
                     
                    //parentNode.right = larget node in left subtree
                }
            }
            return root; 
        }

        private TreeNode GetLargestInSubTree(TreeNode root)
        {
            return null;
        }

        private TreeNode Search(TreeNode root, int key, TreeNode parentNode)
        {
            if (root == null || key == root.val)
            {
                return root;
            }    
            else if (key < root.val)
            {
                parentNode = root;
                return Search(root.left, key, parentNode);
            }
            else
            {
                parentNode = root;
                return Search(root.right, key, parentNode);
            }

        }
    }
}