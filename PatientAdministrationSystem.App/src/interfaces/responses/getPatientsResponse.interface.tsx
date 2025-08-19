import { Patient } from "../patient";

export interface PatientListResponse {
    message: string;
    data:    Patient[];
}