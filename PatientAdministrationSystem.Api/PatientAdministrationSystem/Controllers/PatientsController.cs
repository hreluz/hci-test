using Microsoft.AspNetCore.Mvc;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;

namespace Hci.Ah.Home.Api.Gateway.Controllers.Patients;

[Route("api/patients")]
[ApiExplorerSettings(GroupName = "Patients")]
[ApiController]
public class PatientsController : ControllerBase
{
    private readonly IPatientsService _patientsService;

    public PatientsController(IPatientsService patientsService)
    {
        _patientsService = patientsService;
    }

    // GET /api/patients
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PatientEntity>>> GetAll([FromQuery] string? name, CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            var all = await _patientsService.GetAll(ct);
            return Ok(all);
        }
        else
        {
            var filtered = await _patientsService.SearchByName(name, ct);
            return Ok(filtered);
        }
    }
}