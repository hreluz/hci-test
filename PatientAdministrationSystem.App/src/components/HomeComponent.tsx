import { HeaderComponent } from "./HeaderComponent/HeaderComponent";
import { PatientsListComponent } from "./PatientsCardListComponent/PatientsCardListComponent";
import {usePatient} from '../hooks/usePatient'
import { SearchBarComponent } from "./SearchBarComponent/SearchBarComponent";
import { PatientDetailCardComponent } from "./PatientDetailCardComponent/PatientDetailCardComponent";

export const HomeComponent = () => {
    const {patientsList, searchPatients, patientDetail, findPatient} = usePatient();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
            <HeaderComponent title="Search Patients"/>
            <SearchBarComponent placeholder="Search anything" onQuery={searchPatients}/>
            <PatientsListComponent patientsList={patientsList} findPatient={findPatient}/>
            <PatientDetailCardComponent patientDetail={patientDetail}/>
        </div>
    );
};

