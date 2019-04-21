import React from "react";
import Logo from "../../components/Logo/logo";
import NavLinks from "../../components/Nav/navBar";
import DeleteBtn from "../../components/Buttons/deleteBtn";
import RxModalBtn from "../../components/Buttons/deleteBtnModal";
import RxModal from "../../components/RxModal/rxModal";
import { PatientCard } from "../../components/PatientCard/patientCard";
import { Rx } from "../../components/PatientCard/rx";
//import axios from "axios";
import "./mainPage.css";

class MainPage extends React.Component {

    state = {
        patients: [],
        drugNames: [],
        userId: "",
        show: false,
        patientId: '',
        isLoggedIn: ''
       }

render() {

    return (
        <div className="main-body gradient-background">
            <NavLinks />
            <Logo />
            <div className="container">
                <div className='row patient-list'>
                    {/* {console.log(this.state.patients)} */}
                    {this.state.patients.filter(patient => patient.id === this.state.patientId).map(patient => (
                        <RxModal
                            show={this.state.show}
                            handleClose={this.handleHideModal}
                            key={patient.id}>
                            <strong>{patient.name_first} </ strong>
                            <strong>{patient.name_last}</strong>
                            <hr />
                            {patient.Rxes.map(drug => (
                                <Rx key={drug.id}>
                                    Medication Name: {drug.drug_name}<br />
                                    Rx Number: {drug.rx_num}<br />
                                    Refills: {drug.refills}<br />
                                    Quantity Prescribed: {drug.prescribed_qty}<br />
                                    Frequency: {drug.frequency}<br />
                                    Usage Per Day: {drug.perDay}<br />
                                    Time of Day: {drug.time_of_day}<br />
                                    Prescriber: {drug.prescriber}<br />
                                    Prescriber Number: {drug.prescriber_number}<br />
                                    Pharmacist: {drug.pharmacist}<br />
                                    Pharmacy Number: {drug.pharmacy_number}<br />
                                    Notes: {drug.notes}<br />
                                    <br/>
                                    <hr/>
                                </Rx>
                            ))}
                        </RxModal>
                    ))}

                    <div className='col-md-12 patient-cards'>
                        {this.state.patients.map(patient => (
                            <PatientCard
                                key={patient.id}>
                                <RxModalBtn onClick={() => this.handleRxModal(patient.id)} />
                                <DeleteBtn onClick={() => this.deletePatient(patient.id)} />
                                {patient.name_first}
                                {patient.name_last}
                                {patient.Rxes.map(drug => (
                                    <Rx key={drug.id}>
                                        <strong><i className="fas fa-prescription-bottle-alt black"></i></strong> {drug.drug_name}<strong> <i className="fa-icon far fa-clock"></i></strong>   {drug.time_of_day}  <strong><i className="fa-icon far fa-calendar-alt"></i></strong>  {drug.frequency}
                                        <DeleteBtn onClick={() => this.deleteRx(drug.id)} />
                                        <br/>
                                        <br/>
                                    </Rx>
                                ))}
                            </PatientCard>
                        ))}
                        <a href='/addpatient'><button className="standard-btn">ADD NEW PATIENT</button></a>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default MainPage;