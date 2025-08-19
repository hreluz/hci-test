using System.Linq.Expressions;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;

namespace PatientAdministrationSystem.Application.Repositories.Interfaces;

public interface IPatientsRepository
{
    Task<IEnumerable<PatientEntity>> GetAll(CancellationToken ct = default);
    Task<IEnumerable<PatientEntity>> Find(Expression<Func<PatientEntity, bool>> predicate, CancellationToken ct = default);
    Task<PatientDetailDto?> GetById(Guid id, CancellationToken ct = default);
}