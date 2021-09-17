using System;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using var scope = host.Services.CreateScope(); //will host all services defined in main

            var services = scope.ServiceProvider;

            try
            {
                var context = services.GetRequiredService<DataContext>(); //adding DataContect as a Service
                var userManager = services.GetRequiredService<UserManager<AppUser>>();
                await context.Database.MigrateAsync();//apply pending migrations,create db if not already created othewise update to latest migration
                await Seed.SeedData(context, userManager);//Activities Seed data Object

                //will remove following SeedData1 and SeedData2
                await Seed.SeedData1(context);//Order Seed data Object--may not be used
                await Seed.SeedData2(context);//OrderTask seed data
            }
            catch (Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occured during migraiton");
            }

            await host.RunAsync();//running our application
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
