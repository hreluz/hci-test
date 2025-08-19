using Microsoft.AspNetCore.Mvc;
using PatientAdministrationSystem.API.Models;
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
        var patients = string.IsNullOrWhiteSpace(name)
            ? await _patientsService.GetAll(ct)
            : await _patientsService.SearchByName(name, ct);
        return Ok(new ApiResponse<IEnumerable<PatientDto>>("Patients retrieved successfully", patients));
    }

    // GET /api/patients/{id}
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ApiResponse<PatientDetailDto>>> GetById(Guid id, CancellationToken ct)
    {
        var patient = await _patientsService.GetById(id, ct);

        if (patient is null)
            return NotFound(new ApiResponse<PatientDetailDto>("Patient not found", null));

        return Ok(new ApiResponse<PatientDetailDto>("Patient retrieved successfully", patient));
    }
}