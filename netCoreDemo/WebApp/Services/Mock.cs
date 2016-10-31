using System;

namespace WebApp
{
    public interface IMock
    {
        void Run();
    }

    public class Mock : IMock
    {
        public void Run()
        {
            Console.WriteLine("mock run!");
        }
    }
}