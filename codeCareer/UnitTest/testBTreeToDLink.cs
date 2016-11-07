using System.Collections.Generic;
using codeCareer.Models;
using Machine.Specifications;

namespace codeCareer.UnitTest
{
    [Subject("test BinaryTree convert to Double linked list")]
    public class testBTreeToDlinks
    {
        private static BTreeToDlink<int> tester;
        private static BinaryTree<int> root;

        Establish context = () => 
        {
            tester = new BTreeToDlink<int>();
            BuildTree();
        };

        It should_convert_to_double_linked_list = () =>
        {
            tester.GetConvertedList(root);
            BinaryTree<int> dLinkList = root;
            
            List<int> output = new List<int>();
            while (root != null && root.RightChild != null)
            {
               output.Add(root.Data);
               root = root.RightChild;
            }
            output.ShouldContainOnly(new List<int>() {4, 6, 8, 10, 12, 14, 16});
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