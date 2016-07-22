using System;
using NetCoreDemo.DesignPattern;

namespace NetCoreDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            EDI[] ediDocs = new EDI[3];
            ediDocs[0] = new EDI832();
            ediDocs[1] = new EDI850();
            ediDocs[2] = new EDI810();

            foreach(EDI doc in ediDocs)
            {
                Console.WriteLine(doc.GetType().Name);
                foreach(Segment seg in doc.Segments)
                {
                    Console.WriteLine(seg.GetType().Name);
                }
            } 

            Console.ReadLine();
        }
    }
}
