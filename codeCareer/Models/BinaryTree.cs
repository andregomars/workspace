namespace codeCareer.Models
{
    public class BinaryTree<T>
    {
        public BinaryTree<T> LeftChild { get; set; }
        public BinaryTree<T> RightChild { get; set; }
        public T Data { get; set; }
    }
} 