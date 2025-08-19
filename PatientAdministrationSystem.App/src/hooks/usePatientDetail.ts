import { useCallback, useState } from "react";
import { getPatientDetailService } from "../services/patientDetailService";
import { PatientDetail } from "../interfaces/patientDetail";

export function usePatientDetail() {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [patientDetail, setPatientDetail] = useState<PatientDetail>();

    const findPatient = useCallback(async(id:string) => {
        setIsLoading(true);

        try {
            const response = await getPatientDetailService(id);
            setPatientDetail(response.data);
            setMessage(response.message);
        } catch (error) {
            setMessage('An error occured when trying to get the patient detail');
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const reset = () => {
        setIsLoading(false);
        setMessage('');
        setPatientDetail(undefined);
    }

    return {
        patientDetail,
        isLoading,
        message,
        reset,
        findPatient
    }
}
