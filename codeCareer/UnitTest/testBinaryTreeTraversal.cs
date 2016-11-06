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
            tester.Init();
            BuildTree();
        };

        It should_return_null = () =>
        {
            tester.PreOrderTraversal(root);
            tester.Output.ShouldContainOnly(new List<int>() {4, 6, 8, 10, 12, 14, 16});
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