using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;
using PatientAdministrationSystem.Application.Repositories.Interfaces;

namespace PatientAdministrationSystem.Infrastructure.Repositories;

public class PatientsRepository : IPatientsRepository
{
    private readonly HciDataContext _context;
    private readonly DbSet<PatientEntity> _patients;

    public PatientsRepository(HciDataContext context)
    {
        _context = context;
        _patients = context.Patients;
    }

    public async Task<IEnumerable<PatientEntity>> GetAll(CancellationToken ct = default)
        => await _patients.AsNoTracking().ToListAsync(ct);

    public async Task<IEnumerable<PatientEntity>> Find(Expression<Func<PatientEntity, bool>> predicate, CancellationToken ct = default)
    => await _patients
        .Where(predicate)
        .AsNoTracking()
        .ToListAsync(ct);

    public async Task<PatientDetailDto?> GetById(Guid id, CancellationToken ct = default)
    {
        return await _patients
            .AsNoTracking()
            .Where(p => p.Id == id)
            .Select(p => new PatientDetailDto(
                new PatientDto(p.Id, p.FirstName, p.LastName, p.Email),
                p.PatientHospitals!
                    .Select(ph => new PatientHospitalDto(
                        ph.HospitalId,
                        ph.Hospital.Name,
                        ph.Visit == null
                            ? null
                            : new VisitDto(
                                ph.Visit.Id,
                                ph.Visit.Date
                            )
                        ))
                    .ToList()
            ))
            .FirstOrDefaultAsync(ct);
    }
}