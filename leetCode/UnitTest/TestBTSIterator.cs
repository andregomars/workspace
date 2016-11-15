using System.Collections.Generic;
using LeetCode.Models;
using Machine.Specifications;

namespace LeetCode.UnitTest
{
   [Subject(@"Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
Calling next() will return the next smallest number in the BST.
Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.")]
   public class TestBTSIterator
   {
       private static BSTIterator tester;

       Establish context = () =>
       {
           TreeNode root = InitTree();
           tester = new BSTIterator(root);
       };

       private static TreeNode InitTree()
       {
           TreeNode root = new TreeNode(10);
           root.left = new TreeNode(6);
           root.left.left = new TreeNode(4);
           root.left.right = new TreeNode(8);
           root.right = new TreeNode(14);
           root.right.left = new TreeNode(12);
           root.right.right = new TreeNode(16);
           return root;
       }
      
       It should_get_itenrator = () =>
       {
           List<int> list = new List<int>();
           while (tester.HasNext())
           {
               list.Add(tester.Next());
           }

           list.ShouldContainOnly(new List<int>(){4, 6, 8, 10, 12, 14, 16});
       };
   } 

   /*
     10
    /  \
   6   14
  / \  / \
  4 8 12 16
*/
}