import { Visit } from "./visit";

export interface Hospital {
    hospitalId:   string;
    hospitalName: string;
    visit:        Visit;
}