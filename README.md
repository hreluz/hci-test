# Project C# and React Native

This repository contains two main applications:

1. **Backend** — C# ASP.NET Core API
2. **Frontend** — React 

---

## 1. Backend (C# Project)

### Importante parts

```
PatientAdministrationSystem.Api/
├── PatientAdministrationSystem/        
│   ├── Controllers/                          
│    ├── PatientController.cs                 #This controller, returns the list of patients, by query and by id
│
├── PatientAdministrationSystem.Application/  # Application layer
│   ├── Interfaces/                           # DTO's (PatientDetailDto, PatientDto, PatientHospitalDto, VisitDto)
│   ├── Entities/                             # Entities for db
│   ├── Services/                             # Services
│       ├── Interfaces/                       # Interface (Interface to implement for services)
│           ├── IPatientsService.cs           # Interface for PatientService
│       ├── PatientsService.cs                # The service for patient which implements the IPatientsService.cs
│   ├── Repositories/                         # Repositories
│       ├── Interfaces/                       # Interface (Interface to implement for repository)
│           ├── IPatientsRepository.cs        # Interface for PatientsRepository
│
├── PatientAdministrationSystem.Infrastructure/ # Infrastructure layer
│   ├── Repositories/                         # Repositories
│       ├── PatientsRepository/               # The repository for patient which implements the IPatientsRepository.cs
```

**Key Points**
- **Controllers** handle HTTP requests and return responses for patients.
- **Application layer** contains business rules and orchestrates domain logic.
- **Infrastructure layer** handles data

---

## 2. Frontend (React)

### Structure

```
frontend/
├── src/
│   ├── components/                           # Reusable UI components
│   │   ├── HeaderComponent/                  # Header UI for pages
│   │   ├── PatientsCardListComponent/        # Patient list display
│   │   ├── SearchBarComponent/               # Search bar input
│   │   └── PatientDetailCardComponent/       # Detailed patient card
│   │
│   ├── hooks/                                # Custom React hooks
│   │   ├── usePatient.ts                     # Fetch patient list
│   │   ├── usePatient.test.tsx               # Test for usePatient and usePatientDetail flow
│   │   └── usePatientDetail.ts               # Fetch patient detail
│   │
│   ├── screens/                              # Screen components
│   │   └── HomeComponent.tsx                 # Main screen showing search & patient list
│   │
│   ├── services/                             # API services and HTTP client
│      └── api.ts                            # Axios/fetch wrapper
│
├── App.tsx                                   # App entry point
└── package.json
```

**Key Points**backend/
- **Components** are small, reusable building blocks.
- **Hooks** encapsulate API calls and state logic.
- **Screens** represent full pages of the app.
- **Services** manage API communication.
- **Types** ensure type safety across components.

---

## Running the Project

### Backend
```bash
cd PatientAdministrationSystem.Api
dotnet restore
dotnet run

for watch for changings use
dotnet watch run --project PatientAdministrationSystem/PatientAdministrationSystem.API.csproj
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Technologies

**Backend**
- C#

**Frontend**
- React
- TypeScript
- Axios (or Fetch API)
- Tailwind CSS (By CDN)

---

## License
[MIT](LICENSE)
