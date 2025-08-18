using System.Linq.Expressions;
using PatientAdministrationSystem.Application.Entities;

namespace PatientAdministrationSystem.Application.Repositories.Interfaces;

public interface IPatientsRepository
{
    // Add interfaces here for your repository methods
    Task<IEnumerable<PatientEntity>> GetAll(CancellationToken ct = default);
    Task<IEnumerable<PatientEntity>> Find(Expression<Func<PatientEntity, bool>> predicate, CancellationToken ct = default);
}