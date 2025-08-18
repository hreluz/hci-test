import { Patient } from "../../interfaces/patient";

type Props = {
    patientsList: Patient[];
}

export const PatientsListComponent = ({patientsList}: Props) => {
    
  return (
        <ul className="bg-white shadow-md rounded-lg w-80 divide-y divide-gray-200">
            {patientsList.length > 0 ? (
            patientsList.map((patient) => (
                <li key={patient.id} className="p-3 hover:bg-gray-100">
                {patient.firstName} {patient.lastName}
                </li>
            ))
            ) : (
            <li className="p-3 text-gray-500">No patients found</li>
            )}
        </ul>
  )
}
