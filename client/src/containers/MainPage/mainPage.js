import React from "react";
import Logo from "../../components/Logo/logo";
import { PatientCard } from "../../components/PatientCard/patientCard";
import { Rx } from "../../components/PatientCard/rx";
import NavLinks from "../../components/Nav/navBar";
import DeleteBtn from "../../components/Buttons/deleteBtnLarge";
import DeleteBtnSmall from "../../components/Buttons/deleteBtnSmall.js";
import RxModalBtn from "../../components/Buttons/openModalBtn";
import RxModal from "../../components/RxModal/rxModal";
import Moment from 'react-moment';
import axios from "axios";
import "./mainPage.css";

class MainPage extends React.Component {

    state = {
        patients: [],
        drugNames: [],
        userId: "",
        show: false,
        patientId: "",
        isLoggedIn: ""
       }

    async componentDidMount() {
        console.log("getting access string");
        let accessString = localStorage.getItem('JWT');
        // console.log(accessString);
        if (accessString == null) {
            this.setState({
                error: true,
                isLoggedIn: false
            });
        } else {
            await axios
                .get("/findUser", {
                    params: {
                        username: this.props.match.params.username,
                    },
                    headers: {
                        Authorization: `JWT ${accessString}`
                    }
                })
                .then(response => {
                    this.setState({
                        userId: response.data.id,
                        error: false,
                        isLoggedIn: true
                    });

                    // console.log(response.data)
                    // console.log(this.state.userId)
                    this.loadUser();
                })
                .catch(error => {
                    console.log(error.data);
                });
        }
    }

    loadUser = () => {
        axios.get("/api/user/patient/rx/" + this.state.userId)
            .then(patientData => {
                // console.log(patientData.data.Patients);
                this.setState({
                    patients: patientData.data.Patients
                })
            })
            .catch(err => console.log(`Error: ${err}`)
            );
    }

    deleteRx = id => {
        axios.delete("/api/Rxs/" + id)
            .then(res => this.loadUser())
            .catch(err => console.log(err));
    };

    deletePatient = id => {
        axios.delete("/api/user/patient/" + id)
            .then(res => this.loadUser())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleRxModal = id => {
         console.log(id)
        this.setState({ show: true, patientId: id })

    }

    handleHideModal = () => this.setState({ show: false })

    render() {
        if (this.state.isLoggedIn === false) {
            window.location.href = "/login"
        }

        return (
            <div className="gradient-background">
                <NavLinks />
                <Logo />
                <div className="container">
                <h1 id="clock"><Moment format="MMMM D, YYYY">{this.props.dateToFormat}</Moment></h1>
                    <div className="row dashboard bbstyle">
                        {this.state.patients.filter(patient => patient.id === this.state.patientId).map(patient => (
                            <RxModal
                                show={this.state.show}
                                handleClose={this.handleHideModal}
                                key={patient.id}>
                                <h4><i><strong> {patient.name_first} </strong>
                                <strong> {patient.name_last} </strong></i></h4>
                                <hr />
                                {patient.Rxes.map(drug => (
                                    <Rx key={drug.id}>
                                        <strong>Medication Name:</strong> {drug.drug_name}<br />
                                        <strong>Rx Number:</strong> {drug.rx_num}<br />
                                        <strong>Number of Refills:</strong> {drug.refills}<br />
                                        <strong>Quantity Prescribed:</strong> {drug.dispensed_qty}<br />
                                        <strong>Dose:</strong> {drug.perDay}<br />
                                        <strong>Frequency:</strong> {drug.frequency}<br />
                                        <strong>Time of Day:</strong> {drug.time_of_day}<br />
                                        <strong>Patient Directions:</strong> {drug.sig}<br />
                                        <strong>Prescriber:</strong> {drug.prescriber}<br />
                                        <strong>Prescriber Number:</strong> {drug.prescriber_number}<br />
                                        <strong>Pharmacist:</strong> {drug.pharmacist}<br />
                                        <strong>Pharmacy Number:</strong> {drug.pharmacy_number}<br />
                                        <strong>Notes:</strong> {drug.notes}<br /> 
                                        <br/>
                                        <hr/>
                                    </Rx>
                                ))}
                            </RxModal>
                        ))}

                        <div className="col-md-12 patient-cards">
                            {this.state.patients.map(patient => (
                                <PatientCard
                                    key={patient.id}>   
                                    <DeleteBtn title="Delete Patient From Account" onClick={() => this.deletePatient(patient.id)} />
                                    <RxModalBtn title="See Full Prescription Info" onClick={() => this.handleRxModal(patient.id)} />
                                    {patient.name_first}
                                    {patient.name_last}
                                    {patient.Rxes.map(drug => (
                                        <Rx key={drug.id}>
                                        <div className="row">
                                            <div className="col mb-3">
                                            <strong><i className="fas fa-prescription-bottle-alt fa-lg darkred" title="Drug Name"></i></strong> {drug.drug_name} 
                                            </div>
                                            <div className="col mb-3">
                                            <strong><i className="fa-icon far fa-calendar-alt fa-lg lightblue" title="Frequency"></i></strong>  {drug.frequency} 
                                            </div>
                                            <div className="col mb-3">
                                            <strong><i className="fa-icon far fa-clock fa-lg" title="Time of Day"></i></strong>   {drug.time_of_day}
                                            </div>
                                            <div className="col mb-3">
                                            <DeleteBtnSmall title="Delete this Prescription" onClick={() => this.deleteRx(drug.id)} />
                                            </div>
                                        </div>
                                            <br/>
                                        </Rx>
                                    ))}
                                    
                                </PatientCard>
                            ))}
                            <div className="row">
                                <div className="col-sm-5">
                                    <a href='/addpatient'><button className="standard-btn">ADD NEW PATIENT</button></a>
                                </div>
                                <div className="col"></div>        
                                <div className="col-sm-4">
                                    <a href='/addRx'><button className="standard-btn">ADD NEW Rx</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default MainPage;