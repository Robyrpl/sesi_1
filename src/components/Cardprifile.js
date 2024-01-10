import acsent from "../assets/gambar.png";
import "../css/style.css";
import gambar from "../assets/gambar.png";
const Cardprofile = () => {
  return (
    // 1. Inline Css
    <div
      style={{
        backgroundColor: "#04608f",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(" + { acsent } + ")",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "200px",
      }}
    >
      {/* 2. Css File */}
      <div className="card">
        <img src={gambar} width="100px" />
        <div align="center">
          <h1>BIODATA</h1>
        </div>
        <div align="center">
          <h2>Hafis Roby</h2>
        </div>
        <div>
          Saya seorang siswa SMKN 6 Jember,Jurusan Rekayasa Perangkat Lunak.
        </div>
        <div>Alamat : Pondok Joyo</div>
        <div>Kec. : Semboro</div>
        <div>Kab. : Jember</div>
        <div>Hobi : mancing</div>
        <div>No_Hp :0857331779552</div>
      </div>
    </div>
  );
};

export default Cardprofile;
