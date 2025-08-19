namespace PatientAdministrationSystem.Application.Interfaces;
public sealed record PatientDetailDto(
    PatientDto Patient,
    IReadOnlyList<PatientHospitalDto> Hospitals
);
