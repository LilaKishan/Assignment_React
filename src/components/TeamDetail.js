import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TeamDetail() {
  const param = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const apiUrl = "https://631327f4a8d3f673ffc55a53.mockapi.io/match"
  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res))
  }, [])



  return (
    <>
      <h2 className="text-center mt-3">Team : {data.id}</h2>


      <div className="container-fluid m-4">
        <div className="row m-3">
          <div class="col-5 m-3 card border-primary" >
            <div class="row ">
              <div class="col-md  ">
                <img src={data.Team1Image} class="img-fluid rounded h-100" alt="..." />
              </div>
              <div class="col">
                <div class="card-body">
                  <h5 class="card-title">{data.Team1Name}</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                  <p class="card-text"><small class="text-muted">{data.MatchDate}</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-5 m-3 card border-primary" >
            <div class="row ">
              <div class="col">
                <img src={data.Team2Image} class="img-fluid rounded h-100" alt="..." />
              </div>
              <div class="col-md">
                <div class="card-body">
                  <h5 class="card-title">{data.Team2Name}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">{data.MatchDate}-+</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <p>
              <button class="btn btn-primary d-flex justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Winner Team
              </button>
            </p>
            <div>
              <div class="collapse collapse-horizontal" id="collapseWidthExample">
                <div class="card card-body text-center">
                  {data.winnerName}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center mt-3 p-2">
          <p className="card-text"><small className="text-muted">
            <button type="button" class="btn btn-outline-primary mx-4 content-center"
              onClick={() => {
                navigate("/CRUD/edit/" + param.id);
              }}>
              Edit
            </button>

            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Delete
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">DELETE</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ARE YOU SURE ????
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      fetch(apiUrl + "/" + param.id, { method: "DELETE" })
                        .then(res => {
                          navigate('/CRUD');
                        });
                    }}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </small>
          </p>
        </div>
      </div>
    </>
  )
}