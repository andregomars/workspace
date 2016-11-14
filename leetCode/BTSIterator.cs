using System.Collections.Generic;

namespace LeetCode
{
    public class TreeNode {
        public int val;
        public TreeNode left;
        public TreeNode right;
        public TreeNode(int x) { val = x; }
    }

    public class BSTIterator {

        // private Stack<int> m_values;
        private Queue<int> m_values;

        public BSTIterator(TreeNode root) {
            m_values = new Queue<int>();
            BuildValues(root);
        }

        private void BuildValues(TreeNode root)
        {
            if (root == null) return;
            BuildValues(root.left);
            m_values.Enqueue(root.val);
            BuildValues(root.right);
        }

        /** @return whether we have a next smallest number */
        public bool HasNext() {
            return m_values.Count > 0;
        }

        /** @return the next smallest number */
        public int Next() {
            return m_values.Dequeue();
        }
    }

/**
 * Your BSTIterator will be called like this:
 * BSTIterator i = new BSTIterator(root);
 * while (i.HasNext()) v[f()] = i.Next();
 */
}