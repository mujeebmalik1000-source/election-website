import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="topHeader-left">
        <span>
          <i className="fa-solid fa-phone"></i> Call Us: 548978478
        </span>

        <span>
          <i className="fa-solid fa-envelope"></i> demo@example.com
        </span>

        <span>
          <i className="fa-solid fa-location-dot"></i> 45 Dream street Austria
        </span>
      </div>

      <div className="topHeader-right">
        <span>Social Address :</span>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-google-plus-g"></i>
      </div>
    </div>
  );
}

export default TopHeader;



