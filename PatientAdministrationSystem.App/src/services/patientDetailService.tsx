import { apiClient, endpoints } from "../api";
import { PatientDetailResponse } from "../interfaces/responses/detailPatientResponse.interface";

export async function getPatientDetailService(id:string) {
  const { data } = await apiClient.get<PatientDetailResponse>(endpoints.patient.find(id));
  return data;
}