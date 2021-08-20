using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.OrderTasks
{
    public class Details
    {
        public class Query : IRequest<OrderTask>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, OrderTask>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<OrderTask> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.OrderTasks.FindAsync(request.Id);
            }
        }

    }
}