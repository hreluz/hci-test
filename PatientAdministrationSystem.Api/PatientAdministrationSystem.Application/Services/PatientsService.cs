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

    public async Task<IEnumerable<PatientDto>> SearchByName(string name, CancellationToken ct = default)
    {
        var lowered = name.ToLowerInvariant();
        var matches = await _repository.Find(
            p => p.FirstName.ToLower().Contains(lowered) ||
                p.LastName.ToLower().Contains(lowered),
            ct);

        return matches.Select(ToDto);
    }

    public async Task<PatientDetailDto?> GetById(Guid id, CancellationToken ct = default)
    {
        var entity = await _repository.GetById(id, ct);
        return entity is null ? null : entity;
    }

    private static PatientDto ToDto(PatientEntity e)
        => new(e.Id, e.FirstName, e.LastName, e.Email);
}