import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTeam() {
    const navigate = useNavigate();
    const apiUrl = "https://631327f4a8d3f673ffc55a53.mockapi.io/match";

    const [data, setData] = useState({})

    return (
        <>
            <div className="container">
                <h2 className="text-center m-3">Add Team</h2>
                <div className="container-fluid border border-primary  p-2">

                    <div className="row g-3">
                        <div className="col-md-3 g-4">
                            <label for="inputEmail4" className="form-label" >Team1Name</label>
                            <input type="email" className="form-control" placeholder="name" onChange={(e) => { setData({ ...data, Team1Name: e.target.value }); }} id="inputEmail4" />
                        </div>
                        <div className="col-md-8 g-4">
                            <label for="inputPassword4" className="form-label">Team1Image</label>
                            <input type="text" className="form-control" onChange={(e) => { setData({ ...data, Team1Image: e.target.value }); }} placeholder="Team1Image" id="inputPassword4" />
                        </div>
                        <div className="col-md-3 g-4">
                            <label for="inputEmail4" className="form-label" >Team2Name</label>
                            <input type="email" className="form-control" placeholder="name" onChange={(e) => { setData({ ...data, Team2Name: e.target.value }); }} id="inputEmail4" />
                        </div>
                        <div className="col-md-8 g-4">
                            <label for="inputAddress2" className="form-label">Team2Image</label>
                            <input type="text" className="form-control" id="inputAddress2" onChange={(e) => { setData({ ...data, Team2Image: e.target.value }); }} placeholder="Team2Image" />
                        </div>

                        <div class="col-md-3 g-4">
                            <label for="formFile" class="form-label">Match Date</label>
                            <input class="form-control" type="date" id="formFile" onChange={(e) => { setData({ ...data, MatchDate: e.target.value }); }} placeholder="Matchdate" />
                        </div>
                        <div className="col-md-3 g-4">
                            <label for="inputEmail4" className="form-label" >winnerName</label>
                            <input type="email" className="form-control" placeholder="name" onChange={(e) => { setData({ ...data, winnerName: e.target.value }); }} id="inputEmail4" />
                        </div>

                        <div className="col-12 g-4 d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-primary" onClick={() => {

                                fetch(apiUrl, {
                                    method: "POST",
                                    body: JSON.stringify(data),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })
                                    .then((res) => {
                                        navigate('/CRUD');
                                    })
                            }} >Add</button>
                        </div>
                    </div>
                </div>

                {/* <div className="row g-3">
                <div className="col">
                    <input type="text" onChange={(e) => { setData({ ...data, name: e.target.value }); }} className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                    <input type="text" onChange={(e) => { setData({ ...data, rollno: e.target.value }); }} className="form-control" placeholder="roll no" aria-label="Last name" />
                </div>
                <div className="col">
                    <input type="text" onChange={(e) => { setData({ ...data, department: e.target.value }); }} className="form-control" placeholder="Department" aria-label="Last name" />
                </div>
                <div className="col">
                    <input type="text" onChange={(e) => { setData({ ...data, studentimg: e.target.value }); }} className="form-control" placeholder="imagepath" aria-label="Last name" />
                </div>
            </div>
            <br></br>
            <button type="button" className="btn btn-outline-primary" onClick={() => {

                fetch(apiurl, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((res) => {
                        navigate('/Api');
                    })
            }} >Add Student</button> */}
            </div>
        </>
    )
}