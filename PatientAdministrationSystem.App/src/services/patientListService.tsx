import { apiClient, endpoints } from "../api";
import { Patient } from "../interfaces/patient";

export async function getPatientListService() {
  const { data } = await apiClient.get<Patient[]>(endpoints.patient.list());
  return data;
}