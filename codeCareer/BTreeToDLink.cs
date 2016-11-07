using codeCareer.Models;

namespace codeCareer
{
    public class BTreeToDlink<T> 
    {
        public void Convert(BinaryTree<T> root, BinaryTree<T> prevInOrder)
        {         
            if (root == null) return;

            Convert(root.LeftChild, prevInOrder);
            root.LeftChild = prevInOrder;
            if (prevInOrder != null)
            {
                prevInOrder.RightChild = root;
            }
            prevInOrder = root;
            Convert(root.RightChild, prevInOrder);
        }

        public BinaryTree<T> GetConvertedList(BinaryTree<T> root)
        {
            BinaryTree<T> prevInOrder = null;
            Convert(root, prevInOrder);

            BinaryTree<T> headNode = prevInOrder;
            while (headNode != null && headNode.LeftChild != null)
            {
                headNode = headNode.LeftChild;
            }

            return headNode;
        }
/*
4 <-> 6 

     10
    /  \
   6   14
  / \  / \
  4 8 12 16

*/

    }
}