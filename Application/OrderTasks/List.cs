using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.OrderTasks
{
    public class List
    {
        public class Query : IRequest<List<OrderTask>>
        {

        }

        public class Handler : IRequestHandler<Query, List<OrderTask>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<OrderTask>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.OrderTasks.ToListAsync();
            }
        }

    }
}