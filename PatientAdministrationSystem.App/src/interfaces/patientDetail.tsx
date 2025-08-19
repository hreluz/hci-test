import { Hospital } from "./hospital";
import { Patient } from "./patient";

export interface PatientDetail {
    patient:   Patient;
    hospitals: Hospital[];
}