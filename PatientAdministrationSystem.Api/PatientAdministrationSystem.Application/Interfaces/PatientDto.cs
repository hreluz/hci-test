namespace PatientAdministrationSystem.Application.Interfaces;

public record PatientDto(Guid Id, string FirstName, string LastName, string? Email);
