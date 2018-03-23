using System.Threading;
using System;

namespace netCoreConsoleDemo
{
    public class TimerMars
    {
        public static void Run() 
        {
            int repeat = 5;
            int interval = 60 / (repeat + 1);
            Console.WriteLine("Main thread: {0}", Thread.CurrentThread.GetHashCode());
            Timer timer = new Timer(obj => DoIt(), 
                null, TimeSpan.Zero, TimeSpan.FromSeconds(interval));

            Thread.Sleep(TimeSpan.FromMinutes(1));
            Console.WriteLine("Main thread: {0}", Thread.CurrentThread.GetHashCode());
            timer.Dispose();
        }

        private static void DoIt() 
        {
            Console.WriteLine("Current thread ID: {0}, run at {1}", 
                Thread.CurrentThread.GetHashCode(), DateTime.Now);
            Thread.Sleep(TimeSpan.FromSeconds(30));
        }

    }
}