using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName="Bob", UserName="bob", Email="bob@test.com"},
                    new AppUser{DisplayName="Tom", UserName="tom", Email="tom@test.com"},
                    new AppUser{DisplayName="Jane", UserName="jane", Email="jane@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "WO 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "PAIE will provide equipmet to install,roller expand at marked tubes",
                    Category = "Repair",
                    City = "Lahore",
                    Venue = "ABC Oil Refinary",
                },
                new Activity
                {
                    Title = "WO 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Cleaniing Services",
                    Category = "Cleaning",
                    City = "Karachi",
                    Venue = "Engro Limited",
                },
                new Activity
                {
                    Title = "Wo 3",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "HP Jet Cleaning of Condensed Tubes",
                    Category = "Cleaning",
                    City = "Islamabad",
                    Venue = "ABC Limited",
                },
                new Activity
                {
                      Title = "Wo 4",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Automation Services",
                    Category = "Automation",
                    City = "Islamabad",
                    Venue = "Pepsi Limited",
                },
                new Activity
                {
                    Title = "Wo 5",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Alignmet and Poish Services",
                    Category = "Maintenance",
                    City = "Lahore",
                    Venue = "ABC Engineering Limited",
                },

            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }

        public static async Task SeedData1(DataContext context)
        {
            if (context.Orders.Any()) return;

            var orders = new List<Order>
            {
                new Order
                {
                    OurRef = "WO 1",
                    Description = "Avanceon will provide equipmet to install,roller expand at marked tubes",
                    Equipment = "",
                    Date = DateTime.Now.AddMonths(-2),
                    Category = "Repair",
                    Supervisor="Supervisor1",
                    Labor = "Labor1",
                    Estimated_duration="2 Shifts",
                    Company = "ABC Oil Refinary",
                },
                new Order
                {
                    OurRef = "Ref 2",
                    Description = "Avanceon will provide equipmet to install,roller expand at marked tubes",
                    Equipment = "",
                    Date = DateTime.Now.AddMonths(-2),
                    Category = "Repair",
                    Supervisor="Supervisor1",
                    Labor = "Labor1",
                    Estimated_duration="2 Shifts",
                    Company = "ABC Oil Refinary",
                },
                new Order
                {
                    OurRef = "Ref 3",
                    Description = "Avanceon will provide equipmet to install,roller expand at marked tubes",
                    Equipment = "",
                    Date = DateTime.Now.AddMonths(-2),
                    Category = "Repair",
                    Supervisor="Supervisor1",
                    Labor = "Labor1",
                    Estimated_duration="2 Shifts",
                    Company = "ABC Oil Refinary",
                },
                new Order
                {
                    OurRef = "Ref 4",
                    Description = "Avanceon will provide equipmet to install,roller expand at marked tubes",
                    Equipment = "",
                    Date = DateTime.Now.AddMonths(-2),
                    Category = "Repair",
                    Supervisor="Supervisor1",
                    Labor = "Labor1",
                    Estimated_duration="2 Shifts",
                    Company = "ABC Oil Refinary",
                },
                new Order
                {
                    OurRef = "Ref 5",
                    Description = "Avanceon will provide equipmet to install,roller expand at marked tubes",
                    Equipment = "",
                    Date = DateTime.Now.AddMonths(-2),
                    Category = "Repair",
                    Supervisor="Supervisor1",
                    Labor = "Labor1",
                    Estimated_duration="2 Shifts",
                    Company = "ABC Oil Refinary",
                },

            };

            await context.Orders.AddRangeAsync(orders);
            await context.SaveChangesAsync();
        }



        public static async Task SeedData2(DataContext context)
        {
            if (context.OrderTasks.Any()) return;

            var orderTasks = new List<OrderTask>
            {
                new OrderTask
                {
                    OurRef = "WO 1",
                    Description = "Supply and Installation of 316L Stainless steel material CTI Shields/seats to ASTM SA249 specification 0.87'' OD x 0.28'' x 7'' Length",
                    UnitRate = 10000.0,
                    Quantity = 5,
                    TotalCost = 50000,
                    InWords = "Fifty Thousand USD"
                },
                new OrderTask
                {
                    OurRef = "WO 1",
                    Description = "Supply and Installation of 316L Stainless steel material CTI Shields/seats to ASTM SA249 specification 0.87'' OD x 0.28'' x 7'' Length",
                    UnitRate = 10000.0,
                    Quantity = 6,
                    TotalCost = 60000,
                    InWords = "Sixty Thousand USD"
                },
            };

            await context.OrderTasks.AddRangeAsync(orderTasks);
            await context.SaveChangesAsync();
        }
    }
}