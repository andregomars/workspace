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
         public IConfigurationRoot configRoot { get; private set; }
        public IContainer appContainer { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var configBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            configRoot = configBuilder.Build();
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddHangfire(x => x.UseSqlServerStorage(configRoot.GetConnectionString("DefaultConnection")));

            var containerBuilder = new ContainerBuilder();
            containerBuilder.RegisterType<Mock>().As<IMock>();
            containerBuilder.Populate(services);
            this.appContainer = containerBuilder.Build();

            return new AutofacServiceProvider(this.appContainer);
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

            BackgroundJob.Enqueue<IMock>(x => x.Run());
            //RecurringJob.AddOrUpdate<IMock>( x => x.Run(), "*/5 * * * *");

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

    // public class ContainerJobActivator : JobActivator
    // {
    //     private IContainer _container;

    //     public ContainerJobActivator(IContainer container)
    //     {
    //         _container = container;
    //     }

    //     public override object ActivateJob(Type type)
    //     {
    //         return _container.Resolve(type);
    //     }
    // }
}
