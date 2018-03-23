using System.Collections.Generic;
using System;
using NetCoreDemo.DesignPattern;
using NLog.Extensions.Logging;
// using NLog;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.IO;

namespace netCoreConsoleDemo
{
    class Program
    {
                // private static Logger logger = LogManager.GetCurrentClassLogger();
        private static IContainer container { get; set;}
        
        //private static Logger logger = LogManager.GetCurrentClassLogger();
        public static IConfigurationRoot Configuration { get; private set; }

        static void Main(string[] args)
        {
            // TimerMars.Run();
            // Reader.PrintPath();
            Reader.ReadCsv();

            ILoggerFactory loggerFactory = new LoggerFactory()
                .AddConsole()
                .AddDebug()
                .AddNLog();
            
            ILogger logger = loggerFactory.CreateLogger<Program>();

                        var builder = new ContainerBuilder();
            builder.RegisterType<TodayWriter>().As<IDateWriter>();
            builder.RegisterType<ConsoleOutput>().As<IOutput>();
            container = builder.Build();

            DoAction();

           Console.WriteLine("runned");
        
        
        private static void DoAction()
        {
            using (var scope = container.BeginLifetimeScope())
            {
                var writer = scope.Resolve<IDateWriter>();
                writer.WriteDate();
            }
        }
        
        private static void KeepLog() 
        {
            ILoggerFactory loggerFactory = new LoggerFactory()
               .AddConsole()
               .AddDebug()
               .AddNLog();
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogInformation("nlog works");
            
        }

        private static void TestFactory()
        {
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
        }
    }
}
