using System;

namespace Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public string OurRef { get; set; }

        public string Description { get; set; }
        public string Equipment { get; set; }
        public DateTime Date { get; set; }
        public string Category { get; set; }
        public string Supervisor { get; set; }
        public string Labor { get; set; }

        public string Estimated_duration { get; set; }

        public string Company { get; set; }

    }
}