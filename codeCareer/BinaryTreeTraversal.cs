using codeCareer.Models;
using System.Collections.Generic;

namespace codeCareer
{
    public class BinaryTreeTraversal<T>
    {
        public List<T> Output { get; set; }
        public void Init()
        {
            Output = new List<T>();
        }
        public void InOrderTraversal(BinaryTree<T> root)
        {
            if (root == null) return;
            InOrderTraversal(root.LeftChild);
            Output.Add(root.Data);
            InOrderTraversal(root.RightChild);
        }
        public void PreOrderTraversal(BinaryTree<T> root)
        {
            if (root == null) return;
            Output.Add(root.Data);
            PreOrderTraversal(root.LeftChild);
            PreOrderTraversal(root.RightChild);
        }
        public void PostOrderTraversal(BinaryTree<T> root)
        {
            if (root == null) return;
            PostOrderTraversal(root.LeftChild);
            PostOrderTraversal(root.RightChild);
            Output.Add(root.Data);
        }

    }
}