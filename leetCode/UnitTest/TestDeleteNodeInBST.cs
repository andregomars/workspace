using LeetCode.Models;
using Machine.Specifications;

namespace LeetCode.UnitTest
{
    [Subject("test")]
    public class TestDeleteNodeInBST
    {
        private static DeleteNodeInBST tester;
        private static TreeNode root;

        Establish context = () =>
        {
            TreeNode root = InitTree();
            tester = new DeleteNodeInBST();
        };

        It should_return_node_deleted_BST = () =>
        {
            TreeNode output = tester.DeleteNode(root, 3);
            output.ShouldBeNull();
        };

       private static TreeNode InitTree()
       {
           TreeNode root = new TreeNode(5);
           root.left = new TreeNode(3);
           root.left.left = new TreeNode(2);
           root.left.right = new TreeNode(4);
           root.right = new TreeNode(6);
           root.right.right = new TreeNode(7);
           return root;
       }

 /*
 root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
 */
    }
}