using Machine.Specifications;
//using Xunit;

namespace codeCareer.UnitTest
{
    [Subject("Problem >> Get the Kth node from end of a linked list. It counts from 1 here, so the 1st node from end is the tail of list. ")]
    public class testKthNodeFromEnd
    {
        private static KthNodeFromEnd tester;
        Establish context = () => tester = new KthNodeFromEnd(); 

        It should_return_0 = () => 
        {
            var result = tester.Data;
            result.ShouldEqual(0);
        };
    }
}