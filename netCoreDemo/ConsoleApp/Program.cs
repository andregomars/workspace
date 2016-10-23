using System.Collections.Generic;
using System;
using NetCoreDemo.DesignPattern;
using NLog.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.IO;

namespace NetCoreDemo
{
    public class Program
    {
        //private static Logger logger = LogManager.GetCurrentClassLogger();
        public static IConfigurationRoot Configuration { get; private set; }

        public static void Main(string[] args)
        { 
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            ILoggerFactory loggerFactory = new LoggerFactory()
                .AddConsole()
                .AddDebug()
                .AddNLog();
            
            ILogger logger = loggerFactory.CreateLogger<Program>();

            //TestFactory();
        //    HttpClientSample.Run();
        //   SmsSample.Run();
            // JsonSample.Serialize();
            
           //logger.Info("nlog works");
            string url = Configuration["SMS.AttApi:UrlReceiveSMS"];
            logger.LogInformation("url is: "+url);
            logger.LogInformation("complete");
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