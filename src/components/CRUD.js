import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function CRUD() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiUrl = "https://631327f4a8d3f673ffc55a53.mockapi.io/match"
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  const formatedData = data.map((circ) => {
    return (
      <>
        <h2 className="text-center m-3">
          <Link to={"/CRUD/" + circ.id}>Team : {circ.id}
          </Link>
        </h2>



        <div className="container-fluid text-center item-center ms-4">
          <div class="row row-cols row-cols-md ">
            {/* <div className="col-3"></div> */}
            <div class="col-3 mx-4">
              <div class="card">
                <img src={circ.Team1Image} class="card-img-top" width={"540" + "px"} alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{circ.Team1Name}</h5>
                </div>
              </div>
            </div>
            <div className="col-3 mx-4 p-5"> 
            <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4niYY9AxyCmjr2L9_UDNl4hFsP9hwx4NaA&usqp=CAU" class="card-img-top" width={"540" + "px"} alt="..." />
                
              </div>
              
            </div>
            <div class="col-3 mx-4">
              <div class="card">
                <img src={circ.Team2Image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{circ.Team2Name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })


  return (
    <>

      <div className="Container-fluid">
        <div class="btn-group d-flex justify-content-center mx-4 my-4 item-center">
          <button type="button" class="btn btn-secondary"  aria-expanded="false">
            <Link to="/CRUD/AddTeam" className="nav-link">Add Team</Link>
          </button>
        </div>

      </div>


      {formatedData}

    </>
  )
} 