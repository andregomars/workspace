using codeCareer.Models;
using Machine.Specifications;

namespace codeCareer.UnitTest
{
    [Subject("teset binary tree traversals")]
    public class testBinaryTreeTraversal
    {
        private static BinaryTreeTraversal<int> tester;
        private static BinaryTree<int> btree;

        Establish context = () => 
        {
            tester = new BinaryTreeTraversal<int>();
            btree = new BinaryTree<int>();
        };

        It should_return_null = () =>
        {
            var list = tester.PreOrderTraversal(btree);
            // list.ShouldMatch(null);
            list.ShouldBeNull();
        };

    }
}