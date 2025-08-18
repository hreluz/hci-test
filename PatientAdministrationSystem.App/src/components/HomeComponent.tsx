import { HeaderComponent } from "./HeaderComponent/HeaderComponent";
import { PatientsListComponent } from "./PatientsListComponent/PatientsListComponent";
import {usePatient} from '../hooks/usePatient'
import { SearchBarComponent } from "./SearchBarComponent/SearchBarComponent";
import { useState } from "react";

export const HomeComponent = () => {

    const {patientsList} = usePatient();
    const [search, setSearch] = useState('');

    return (
        <div className="">
            <HeaderComponent title="Search Patients"/>
            <SearchBarComponent search={search} setSearch={setSearch}/>
            <PatientsListComponent patientsList={patientsList}/>
        </div>
    );
};

