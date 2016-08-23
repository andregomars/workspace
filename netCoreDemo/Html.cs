using System.Net.Http;

namespace NetCoreDemo.DesignPattern
{
    public class Passcode
    {
        public static string Encode(string input) 
        {
            //return HttpUtility.UrlPathEncode(input);
            return input;
        }
    }
}
