import { Patient } from '../../interfaces/patient'

type Props = {
    patient: Patient;
}

export const PatientCardComponent = ({patient} : Props) => {
  return (
    <div key={patient.id} className="bg-white shadow-lg rounded-2xl p-4 flex items-center justify-center font-semibold text-lg">
        {patient.firstName} {patient.lastName}
    </div>
  )
}
