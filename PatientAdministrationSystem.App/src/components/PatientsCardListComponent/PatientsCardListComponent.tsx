import { Patient } from "../../interfaces/patient";
import { PatientCardComponent } from "../PatientCardComponent/PatientCardComponent";

type Props = {
    patientsList: Patient[];
}

export const PatientsListComponent = ({patientsList}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {patientsList.length > 0 ? 
            patientsList.map((patient) => <PatientCardComponent key={patient.id} patient={patient}/>)
            : 
            <h3 className="flex items-center justify-center">No patients found</h3>
        }
    </div>
  )
}
