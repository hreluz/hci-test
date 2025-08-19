using PatientAdministrationSystem.Application.Entities;

namespace PatientAdministrationSystem.Application.Interfaces;

public interface IPatientsService
{
    Task<IEnumerable<PatientDto>> GetAll(CancellationToken ct = default);
    Task<IEnumerable<PatientDto>> SearchByName(string name, CancellationToken ct = default);
    Task<PatientDetailDto?> GetById(Guid id, CancellationToken ct = default);
}