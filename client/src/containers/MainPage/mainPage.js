import React from "react";
import Logo from "../../components/Logo/logo";
import { PatientCard } from "../../components/PatientCard/patientCard";
import { Rx } from "../../components/PatientCard/rx";
import NavLinks from "../../components/Nav/navBar";
import DeleteBtn from "../../components/Buttons/deleteBtnLarge";
import DeleteBtnSmall from "../../components/Buttons/deleteBtnSmall.js";
import RxModalBtn from "../../components/Buttons/openModalBtn";
import InfoBtn from "../../components/Buttons/infoBtn";
import RxModal from "../../components/RxModal/rxModal";
import Moment from "react-moment";
import SweetAlert from "react-bootstrap-sweetalert";
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
       };

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
                console.log(patientData.data.Patients);
                this.setState({
                    patients: patientData.data.Patients,
                    alert: null
                });
            })
            .catch(err => console.log(`Error: ${err}`)
            );
    }

    deleteRx = id => {

        const getAlert = () => (
            <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes!"
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="default"
            title="Are you sure you want to delete this medication from the patient's file?"
            onConfirm={() => axios.delete("/api/Rxs/" + id).then(res => this.loadUser())}
            onCancel={() => this.onCancelDelete()}
            >
            You will not be able to recover it once deleted!
        </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        });
         
    }
    
    onCancelDelete(){
        this.setState({
            alert: null
        });
    }
    
    deletePatient = id => {

        const getAlert = () => (
            <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes!"
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="default"
            title="Are you sure you want to delete this patient?"
            onConfirm={() => axios.delete("/api/user/patient/" + id).then(res => this.loadUser())}
            onCancel={() => this.onCancelDelete()}
            >
            All information including the list of medications will be deleted!
        </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        });
    }
        
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

    getDrugInfo = () => window.open("https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?")
    
    render() {
        if (this.state.isLoggedIn === false) {
            window.location.href = "/login"
        }

        return (
            <div className="gradient-background1">
                <NavLinks />
                <Logo />
                <div className="container p-2">
                <h1 id="clock"><Moment format="dddd">{this.props.dateToFormat}</Moment></h1>
                <h1 id="clock"><Moment format="MMMM D, YYYY">{this.props.dateToFormat}</Moment></h1>
                <h1 id="clock"><Moment format="hh:mm a">{this.props.dateToFormat}</Moment></h1>
                    <div className="row dashboard bbstyle">
                        {this.state.patients.filter(patient => patient.id === this.state.patientId).map(patient => (
                            <RxModal
                                show={this.state.show}
                                handleClose={this.handleHideModal}
                                key={patient.id}>
                                <div className="col-sm-1 float-right">
                                    <InfoBtn title="www.dailymed.drugInfo" onClick={() => this.getDrugInfo()} />
                                </div>
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

                        <div className="col-md-12 p-0 patient-cards">
                            {this.state.patients.map(patient => (
                                <PatientCard key={patient.id}>  
                                    <div className="row">
                                        <div className="col-sm-10">
                                            {patient.name_first}
                                            {" "}
                                            {patient.name_last}
                                        </div>
                                        <div className="col-sm-1">                                   
                                            <RxModalBtn title="See Full Prescription Info" onClick={() => this.handleRxModal(patient.id)} />
                                        </div>
                                        <div className="col-sm-1">
                                            <DeleteBtn title="Delete Patient From Account" onClick={() => this.deletePatient(patient.id)} /> {this.state.alert}                                  
                                        </div>
                                    </div>
                                    <hr />
                                    {patient.Rxes.map(drug => (
                                    <Rx key={drug.id}>
                                    <div className="row" id="contents">
                                        <div className="col-sm mt-4 mb-2" id="border">
                                            <strong><i className="fas fa-prescription-bottle-alt fa-lg darkred" title="Drug Name"></i></strong> {drug.drug_name} 
                                        </div>
                                        <div className="col-sm mt-4 mb-2" id="border">
                                            <strong><i className="fas fa-pills fa-lg blue" title="Dosage"></i></strong> {drug.perDay} 
                                        </div>
                                        <div className="col-sm mt-4 mb-2" id="border">
                                            <strong><i className="fa-icon far fa-calendar-alt fa-lg green" title="Frequency"></i></strong>  {drug.frequency} 
                                        </div>
                                        <div className="col-sm mt-4 mb-2" id="border">
                                            <strong><i className="fa-icon far fa-clock fa-lg" title="Time of Day"></i></strong>   {drug.time_of_day}
                                        </div>
                                        <div className="col-sm-1 mt-4 mb-2" id="border">          
                                            <DeleteBtnSmall title="Delete this Prescription" onClick={() => this.deleteRx(drug.id)} /> {this.state.alert}                                   
                                        </div>
                                    </div>
                                    <div className="divider"></div>                             
                                        </Rx>
                                    ))}                         
                                </PatientCard>
                            ))}
                            <div className="row">
                                <div className="col-sm-5 mt-3">
                                    <a href="/addpatient"><button className="standard-btn"><i className="fas fa-universal-access fa-spin person" style={{ color: 'white'}}></i>ADD NEW PATIENT</button></a>
                                </div>
                                <div className="col"></div>        
                                <div className="col-sm-4 mt-3">
                                    <a href="/addRx"><button className="standard-btn"><i className="fas fa-tablets fa-spin fa-xs tablets" style={{ color: 'white'}}></i>ADD NEW Rx</button></a> 
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