namespace PatientAdministrationSystem.Application.Interfaces;

public interface IPatientsService
{
    Task<IEnumerable<PatientDto>> GetAll(CancellationToken ct = default);
    Task<IEnumerable<PatientDto>> SearchByName(string name, CancellationToken ct = default);
}