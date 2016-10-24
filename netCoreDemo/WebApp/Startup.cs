using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Hangfire;
using Microsoft.Extensions.Configuration;
using System.IO;
using Autofac;
using Autofac.Extensions.DependencyInjection;

namespace WebApp
{
    public class Startup
    {
         public IConfigurationRoot Configuration { get; private set; }
        public IContainer ApplicationContainer { get; private set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHangfire(x => x.UseSqlServerStorage(Configuration.GetConnectionString("DefaultConnection")));

            var builder = new ContainerBuilder();
            builder.RegisterType<Mock>().As<IMock>();
            builder.Populate(services);
            this.ApplicationContainer = builder.Build();

            new AutofacServiceProvider(this.ApplicationContainer);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //GlobalConfiguration.Configuration.UseSqlServerStorage("<connection string or its name>");
            app.UseHangfireDashboard();
            app.UseHangfireServer();

            //BackgroundJob.Enqueue(() => Console.WriteLine("Fire-and-forget"));
            //RecurringJob.AddOrUpdate( () => Console.WriteLine("Recurring!"), Cron.Minutely);
            //RecurringJob.AddOrUpdate( () => Console.WriteLine("Recurring!"), "*/1 * * * *");
            //BackgroundJob.Enqueue(() => (() => Mock.Run());

            loggerFactory.AddConsole();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });



        }
    }
}
