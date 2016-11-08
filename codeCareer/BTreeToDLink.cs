using codeCareer.Models;

namespace codeCareer
{
    public class BTreeToDlink<T> 
    {
        public void Convert(BinaryTree<T> root, ref BinaryTree<T> prevInOrder)
        {         
            if (root == null) return;

            Convert(root.LeftChild, ref prevInOrder);
            root.LeftChild = prevInOrder;
            if (prevInOrder != null)
            {
                prevInOrder.RightChild = root;
            }
            prevInOrder = root;
            Convert(root.RightChild, ref prevInOrder);
        }

        public BinaryTree<T> GetConvertedList(BinaryTree<T> root)
        {
            BinaryTree<T> prevInOrder = null;
            Convert(root, ref prevInOrder);

            BinaryTree<T> headNode = prevInOrder;
            while (headNode != null && headNode.LeftChild != null)
            {
                headNode = headNode.LeftChild;
            }

            return headNode;
        }
    }
}