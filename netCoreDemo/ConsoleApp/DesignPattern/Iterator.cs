using System.Collections.Generic;

namespace NetCoreDemo.DesignPattern
{
	public class RoleList : IEnumerable<int, string>
	{
		private DictionaryList<int, string> list;
		public IEnumerator<int, string> GetEnumerator()
		{
			return list.GetEnumerator();
		}

		public RoleList(DictionaryList<int, string> list)
		{
			list = new DictionaryList<int, string>();
		}
	}
    
}