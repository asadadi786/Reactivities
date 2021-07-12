using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "WO 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Avanceon will provide equipmet to install,roller expand at marked tubes",
                    Category = "Repair",
                    City = "Lahore",
                    Venue = "ABC Oil Refinary",
                },
                new Activity
                {
                    Title = "WO 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "WO 1 month ago",
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
                    OurRef = "Ref 1",
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
    }
}