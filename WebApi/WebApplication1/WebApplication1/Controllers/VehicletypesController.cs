using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicletypesController : ControllerBase
    {
        private readonly TrackingContext _context;

        public VehicletypesController(TrackingContext context)
        {
            _context = context;
        }

        // GET: api/Vehicletypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicletype>>> GetVehicletype()
        {
            return await _context.Vehicletype.ToListAsync();
        }

        // GET: api/Vehicletypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicletype>> GetVehicletype(int id)
        {
            var vehicletype = await _context.Vehicletype.FindAsync(id);

            if (vehicletype == null)
            {
                return NotFound();
            }

            return vehicletype;
        }

        // PUT: api/Vehicletypes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicletype(int id, Vehicletype vehicletype)
        {
            if (id != vehicletype.Id)
            {
                return BadRequest();
            }

            _context.Entry(vehicletype).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicletypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Vehicletypes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Vehicletype>> PostVehicletype(Vehicletype vehicletype)
        {
            _context.Vehicletype.Add(vehicletype);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (VehicletypeExists(vehicletype.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVehicletype", new { id = vehicletype.Id }, vehicletype);
        }

        // DELETE: api/Vehicletypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Vehicletype>> DeleteVehicletype(int id)
        {
            var vehicletype = await _context.Vehicletype.FindAsync(id);
            if (vehicletype == null)
            {
                return NotFound();
            }

            _context.Vehicletype.Remove(vehicletype);
            await _context.SaveChangesAsync();

            return vehicletype;
        }

        private bool VehicletypeExists(int id)
        {
            return _context.Vehicletype.Any(e => e.Id == id);
        }
    }
}
