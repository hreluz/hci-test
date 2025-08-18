namespace PatientAdministrationSystem.API.Models;

public class ApiResponse<T>
{
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }

    public ApiResponse(string message, T? data)
    {
        Message = message;
        Data = data;
    }
}
