using System.Collections.Generic;
using codeCareer.Models;
using Machine.Specifications;

namespace codeCareer.UnitTest
{
    [Subject("teset binary tree traversals")]
    public class testBinaryTreeTraversal
    {
        private static BinaryTreeTraversal<int> tester;
        private static BinaryTree<int> root;

        Establish context = () => 
        {
            tester = new BinaryTreeTraversal<int>();
            BuildTree();
        };

        It should_traversal_preorder = () =>
        {
            tester.Init();
            tester.PreOrderTraversal(root);
            tester.Output.ShouldContainOnly(new List<int>() {4, 6, 8, 10, 12, 14, 16});
        };
        It should_traversal_inorder = () =>
        {
            tester.Init();
            tester.InOrderTraversal(root);
            tester.Output.ShouldContainOnly(new List<int>() {10, 6, 4, 8, 14, 12, 16});
        };
        It should_traversal_postorder = () =>
        {
            tester.Init();
            tester.PostOrderTraversal(root);
            tester.Output.ShouldContainOnly(new List<int>() {4, 8, 6, 12, 16, 14, 10});
        };

        private static void BuildTree()
        {
            root = new BinaryTree<int>();
            root.LeftChild = new BinaryTree<int>();
            root.RightChild = new BinaryTree<int>();
            root.LeftChild.LeftChild = new BinaryTree<int>();
            root.LeftChild.RightChild = new BinaryTree<int>();
            root.RightChild.LeftChild = new BinaryTree<int>();
            root.RightChild.RightChild = new BinaryTree<int>();

            root.Data = 10;
            root.LeftChild.Data = 6;
            root.RightChild.Data = 14;
            root.LeftChild.LeftChild.Data = 4;
            root.LeftChild.RightChild.Data = 8;
            root.RightChild.LeftChild.Data = 12;
            root.RightChild.RightChild.Data = 16;
/*
     10
    /  \
   6   14
  / \  / \
  4 8 12 16

*/
        }

    }
}