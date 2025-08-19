import { useCallback, useEffect, useState } from "react";
import { Patient } from "../interfaces/patient";
import { getPatientListService } from "../services/patientListService";
import { usePatientDetail } from "./usePatientDetail";

export function usePatient() {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [patientsList, setPatientsList] = useState<Patient[]>([]);
    const [lastQuery, setLastQuery] = useState('');
    const {findPatient, reset, patientDetail} = usePatientDetail();
    
    const fetchPatients = useCallback(async(query = '') => {
        reset();
        setIsLoading(true);

        try {
            const response = await getPatientListService(query);
            setPatientsList(response.data);
            setMessage(response.message);
        } catch (error) {
            setMessage('An error occured when trying to get the patient list');
            throw error;
        } finally {
            setIsLoading(false);
        }

    }, []);

    const searchPatients = async(query:string = '') => {
        query = query.trim().toLowerCase();

        if (query == lastQuery) return;

        fetchPatients(query);
        setLastQuery(query);
    }

    useEffect(() => {
        fetchPatients();
    }, []);

    return {
        patientsList,
        isLoading,
        message,
        fetchPatients,
        searchPatients,
        findPatient,
        patientDetail
    }
}
