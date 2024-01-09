import acsent from "../assets/logo.png";
import "../css/style.css";

const Cardprofile = () => {
  return (
    // 1. Inline Css
    <div
      style={{
        backgroundColor: "#00B6DF",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(" + { acsent } + ")",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 2. Css File */}

      <div className="card" align="center">
        <img />
        <div>
          <h1>siswa SMKN 6 JEMBER</h1>
        </div>
        <div>
          <h2>Hafis Roby</h2>
        </div>
        <div>
          Saya seorang siswa SMKN 6 Jember,Jurusan Rekayasa Perangkat Lunak.
        </div>
        <div>Alamat : Pondok Joyo</div>
        <div>Kec. : Semboro</div>
        <div>Kab. : Jember</div>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Cardprofile;
