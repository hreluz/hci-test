import { apiClient, endpoints } from "../api";
import { PatientListResponse } from "../interfaces/responses/getPatientsResponse.interface";

export async function getPatientListService(query = '') {
  const { data } = await apiClient.get<PatientListResponse>(endpoints.patient.list(query));
  return data;
}