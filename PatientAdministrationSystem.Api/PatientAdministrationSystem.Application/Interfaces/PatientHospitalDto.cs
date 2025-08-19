namespace PatientAdministrationSystem.Application.Interfaces;
public sealed record PatientHospitalDto(
    Guid HospitalId,
    string HospitalName,
    VisitDto? Visit
);
