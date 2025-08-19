namespace PatientAdministrationSystem.Application.Interfaces;

public sealed record VisitDto(
    Guid Id,
    DateTime VisitDate
);