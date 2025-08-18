import { useCallback, useEffect, useState } from "react";
import { Patient } from "../interfaces/patient";
import { getPatientListService } from "../services/patientListService";

export function usePatient() {
    const [patientsList, setPatientsList] = useState<Patient[]>([])
    
    const fetchPatients = useCallback(async() => {
        const patients = await getPatientListService();
        setPatientsList(patients);
    }, []);

    useEffect(() => {
        fetchPatients();
    }, []);

    return {
        patientsList,
        fetchPatients
    }
}
