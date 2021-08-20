using System;

namespace Domain
{
    public class OrderTask
    {
        public Guid Id { get; set; }
        public string OurRef { get; set; }

        public string Description { get; set; }

        public double UnitRate { get; set; }

        public int Quantity { get; set; }

        public double TotalCost { get; set; }

        public string InWords { get; set; }
    }
}