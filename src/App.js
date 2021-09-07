import React, { useState } from 'react'
import "./App.css"

export default function App() {

  const Data = [
    {
      id: 1,
      makale: "hobbala vede zubbala"
    },
    {
      id: 2,
      makale: "zınk zınk zınk hooo bale"
    },
    {
      id: 3,
      makale: "hobbala vede zubba la"
    }
  ]
  const [girilen, setGirilen] = useState("null");
  const [data, setData] = useState("null");
  const [resultText, setResultText] = useState("null");
  const [resultText1, setResultText1] = useState("null");

  function Hesapla() {
    const regex = /[\)\}\(\{\,\.\ \:\;\?\-\*\’\^\#\@\%\/\\\”\!\<\>\0\1\2\3\4\5\6\7\8\9\₺\_\€\ß\$]/gm;
    const subst = ``;

    for (let i = 0; i < Data.length; i++) {  //burda data yazan yerlere işte veritabanındaki makalelleri list şeklinde vericeksin
      const result = Data[i].makale.replace(regex, subst);
      const result2 = girilen.replace(regex, subst);  //girilen yazan inputdaki değeri çekiyo

      if (result === result2) {
        setData("Aynı makale veritabanında var") // text i değiştiriyo sadece
      } else {
        setData("Makale eşleşmedi.") // text i değiştiriyo sadece
      }
    }
  }

  return (
    <div>
      <br />
      <br />
      {Data.map((item) => (
        <p style={{ marginLeft: "10vw", marginTop: "0.5vw" }} >{item.makale}</p>
      ))}
      <input type="text" name="makale" onChange={(e) => { setGirilen(e.target.value) }} style={{ marginLeft: "10vw", marginTop: "1vw", width: "50vw" }} />
      <button onClick={Hesapla}>Kontrol et</button>
      <p style={{ marginLeft: "10vw", marginTop: "5vw" }} >{data}</p>
      <p style={{ marginLeft: "10vw", marginTop: "5vw" }} >{girilen}</p>
      <p style={{ marginLeft: "10vw", marginTop: "5vw" }} >{resultText}</p>
      <p style={{ marginLeft: "10vw", marginTop: "5vw" }} >{resultText1}</p>
    </div>
  )
}

