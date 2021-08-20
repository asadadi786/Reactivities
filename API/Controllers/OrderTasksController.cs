using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.OrderTasks;
using System;

namespace API.Controllers
{
    public class OrderTasksController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<OrderTask>>> GetOrders()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderTask>> GetOrders(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrders(OrderTask oTask)
        {
            return Ok(await Mediator.Send(new Create.Command { OTask = oTask }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditOrder(Guid id, OrderTask oTask)
        {
            oTask.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { OTask = oTask }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }


    }
}