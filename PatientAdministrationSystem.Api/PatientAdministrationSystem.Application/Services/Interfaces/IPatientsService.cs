namespace PatientAdministrationSystem.Application.Interfaces;

public interface IPatientsService
{
    Task<IEnumerable<PatientDto>> GetAll(CancellationToken ct = default);
}