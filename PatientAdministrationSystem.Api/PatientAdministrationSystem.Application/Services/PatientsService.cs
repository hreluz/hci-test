using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;
using PatientAdministrationSystem.Application.Repositories.Interfaces;
using System.Linq.Expressions;

namespace PatientAdministrationSystem.Application.Services;

public class PatientsService : IPatientsService
{
    private readonly IPatientsRepository _repository;

    public PatientsService(IPatientsRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<IEnumerable<PatientDto>> GetAll(CancellationToken ct = default)
        => (await _repository.GetAll(ct)).Select(ToDto);

    private static PatientDto ToDto(PatientEntity e)
        => new(e.Id, e.FirstName, e.LastName, e.Email);
}