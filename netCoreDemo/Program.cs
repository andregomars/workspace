using System.Collections.Generic;
using System;
using NetCoreDemo.DesignPattern;

namespace NetCoreDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            List<EDI> ediDocs = new List<EDI>();
            ediDocs.Add(new EDI832());
            ediDocs.Add(new EDI850());
            ediDocs.Add(new EDI810());

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
