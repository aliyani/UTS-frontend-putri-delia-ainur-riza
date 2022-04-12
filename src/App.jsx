import { useState } from "react"
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";
import Nav from "./components/Nav";
import ReactState from "./components/ReactState";
import Form from "./components/Form";

const daftarAnggota = [
  {
    gambar: "https://kikomunal-indonesia.dgip.go.id/storage/app/uploads/public/616/50b/668/61650b6685932945724600.png",
    title: "Batik Gajah oling",
    content:
      "batik gajah oling adalah batik khas banyuwangi",
  },
  {
    gambar: "https://s2.bukalapak.com/img/765701294/large/Kain_Batik_Tulis_Katun_Klasik_Kopi_Pecah_Gajah_Oling.jpg",
    title: "Batik kopi pecah",
    content:
      "batik kopi adalah batik khas banyuwangi.",
  },
  {
    gambar: "https://cf.shopee.co.id/file/c996e4f1103ac877d4ff6e0d53e57035",
    title: "Batik paras gempal",
    content:
      "atik kopi adalah batik khas banyuwangi.",
  },
  {
    gambar: "https://i.pinimg.com/originals/66/9e/ac/669eacb46e8253c21492569ed5a21093.jpg",
    title: "Batik mega mendung",
    content:
      "batik mega mendung adalah batik khas cirebon.",
  },
  {
    gambar: "https://i0.wp.com/dansmedia.net/wp-content/uploads/2020/03/Batik-Pekalongan-Motif-Tujuh-Rupa.png?fit=740%2C410&ssl=1",
    title: "Batik tuju rupa",
    content:
      "batik tuju rupa merupakan batik khas pekalongan.",
  },
  {
    gambar: "https://i0.wp.com/masfikr.com/fikrithoni/wp-content/uploads/2017/04/batik-jumputan-bermofit-bunga.jpg?resize=680%2C350&ssl=1",
    title: "Batik jumputan",
    content:
      "batik jumputan adalah batik khas pekalongan.",
  },
  
];

function App() {
  return (
    <div>
      <Nav />
      <div className="container mb-4 mt-4">
      </div>
      <div className="container">
        <div className="row">
          {daftarAnggota.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card
                gambar={agt.gambar}
                title={agt.title}
                content={agt.content}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="container">
        <h2>State</h2>
        <ReactState />
      </div>
    </div>
  );
}

export default App;
