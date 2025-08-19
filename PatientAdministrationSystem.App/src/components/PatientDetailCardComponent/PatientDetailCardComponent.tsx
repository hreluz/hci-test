import { PatientDetail } from "../../interfaces/patientDetail"

type Prop  = {
    patientDetail?: PatientDetail;
}

export const PatientDetailCardComponent = ({patientDetail}: Prop) => {
    return (
        <>
            {
                <p>{JSON.stringify(patientDetail)}</p>
            }
        </>
    )
}
