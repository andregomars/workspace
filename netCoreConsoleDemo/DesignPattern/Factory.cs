using System.Collections.Generic;

namespace ConsoleApp.DesignPattern
{
    public abstract class Segment
    {

    }

    public abstract class EDI 
    {
        //private List<Segment> segments; 
        public List<Segment> Segments {get; set;}

        public EDI()
        {
            this.Segments = new List<Segment>();
            this.CreateSegments();

        }

        public abstract void CreateSegments();
    }

    public class LIN : Segment
    {

    }

    public class PO1 : Segment
    {

    }

    public class BIG : Segment
    {
        
    }

    public class INV : Segment
    {
        
    }

    public class EDI832 : EDI 
    {
        public override void CreateSegments()
        {
            this.Segments.Add(new LIN());
        }
    }

    public class EDI850 : EDI 
    {
        public override void CreateSegments()
        {
            this.Segments.Add(new BIG());
            this.Segments.Add(new PO1());
        }
    }
    public class EDI810 : EDI 
    {
        public override void CreateSegments()
        {
            this.Segments.Add(new INV());
        }
    }

    
}