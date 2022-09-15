import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner p-2">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="d-block justify-content-center" style={{width:940+'px',marginLeft:28+'px'}} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" className="d-block justify-content-center" style={{width:940+'px',marginLeft:28+'px'}} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://images.unsplash.com/photo-1430232324554-8f4aebd06683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" className="d-block justify-content-center" style={{width:940+'px',marginLeft:28+'px'}} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      

    </div>
  )
}
