using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.OrderTasks
{
    public class Edit
    {
        public class Command : IRequest
        {
            public OrderTask OTask { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var oTask = await _context.OrderTasks.FindAsync(request.OTask.Id);

                _mapper.Map(request.OTask, oTask);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }

}