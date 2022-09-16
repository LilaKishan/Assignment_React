import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTeamDetail() {
    const navigate = useNavigate();
    const param = useParams();
    const apiUrl = "https://631327f4a8d3f673ffc55a53.mockapi.io/match";
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);



    return (
    <div className="container">
        <h2 className="text-center m-3">Edit Team</h2>
        <div className="container-fluid border border-primary p-4">
            
            <div className="row g-3">
                <div className="col-md-3">
                    <label for="inputEmail4" className="form-label" >Team1Name</label>
                    <input type="email" className="form-control" placeholder="name" onChange={(e) => { setData({ ...data, Team1Name: e.target.value }); }} value={data.Team1Name} id="inputEmail4" />
                </div>
                <div className="col-md-8">
                    <label for="inputPassword4" className="form-label">Team1Image</label>
                    <input type="text" className="form-control" onChange={(e) => { setData({ ...data, Team1Image: e.target.value }); }} value={data.Team1Image} placeholder="Team1Image" id="inputPassword4" />
                </div>
                <div className="col-md-3">
                    <label for="inputEmail4" className="form-label" >Team2Name</label>
                    <input type="email" className="form-control" placeholder="name" onChange={(e) => { setData({ ...data, Team2Name: e.target.value }); }} value={data.Team2Name} id="inputEmail4" />
                </div>
                <div className="col-md-8">
                    <label for="inputAddress2" className="form-label">Team2Image</label>
                    <input type="text" className="form-control" id="inputAddress2" onChange={(e) => { setData({ ...data, Team2Image: e.target.value }); }} value={data.Team2Image} placeholder="Team2Image" />
                </div>

                <div class="col-md-3">
                    <label for="formFile" class="form-label">Match Date</label>
                    <input class="form-control" type="date" id="formFile" onChange={(e) => { setData({ ...data, MatchDate: e.target.value }); }} value={data.MatchDate} placeholder="Matchdate" />
                </div>
                <div className="col-md-3">
                    <label for="inputEmail4" className="form-label" >winnerName</label>
                    <input type="email" className="form-control" placeholder="name" onChange={(e) => { setData({ ...data, winnerName: e.target.value }); }} value={data.winnerName} id="inputEmail4" />
                </div>

                <div className="col-12 g-4 d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-primary" onClick={() => {

                        fetch(apiUrl + "/" + param.id, {
                            method: "PUT",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                navigate('/CRUD');
                            })
                    }}>Edit</button>
                </div>
            </div>
        </div>
    </div>
    )
}
