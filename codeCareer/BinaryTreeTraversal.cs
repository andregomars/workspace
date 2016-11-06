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
        public void PreOrderTraversal(BinaryTree<T> root)
        {
            if (root == null) return;
            PreOrderTraversal(root.LeftChild);
            Output.Add(root.Data);
            PreOrderTraversal(root.RightChild);
        }
    }
}