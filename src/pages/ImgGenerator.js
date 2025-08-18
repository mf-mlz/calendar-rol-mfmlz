import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import html2canvas from "html2canvas";
import "moment/locale/es";

const GenerateImg = () => {
  const { name, day, month, year } = useParams();
  const divRef = useRef();
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    const versiculos = [
      {
        cita: "Números 6:24-26",
        texto:
          "El Señor te bendiga y te guarde; el Señor haga resplandecer su rostro sobre ti y tenga de ti misericordia; el Señor alce sobre ti su rostro y ponga en ti paz.",
      },
      {
        cita: "Jeremías 29:11",
        texto:
          "Porque yo sé los planes que tengo para ti —declara el Señor— planes de bienestar y no de calamidad, para darte un futuro y una esperanza.",
      },
      {
        cita: "Romanos 5:8",
        texto:
          "Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros.",
      },
      {
        cita: "Efesios 2:8",
        texto:
          "Porque por gracia ustedes han sido salvados mediante la fe; esto no procede de ustedes, sino que es el regalo de Dios.",
      },
      { cita: "Salmo 23:1", texto: "El Señor es mi pastor; nada me falta." },
      {
        cita: "Santiago 1:17",
        texto:
          "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces.",
      },
      {
        cita: "Salmo 139:14",
        texto:
          "Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.",
      },
      {
        cita: "Juan 3:16",
        texto:
          "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, sino que tenga vida eterna.",
      },
      {
        cita: "Filipenses 4:13",
        texto: "Todo lo puedo en Cristo que me fortalece.",
      },
      {
        cita: "Salmo 118:24",
        texto:
          "Este es el día que hizo el Señor; nos gozaremos y alegremos en él.",
      },
    ];

    // elegir versículo aleatorio
    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const chosenVerse = versiculos[randomIndex];
    setVerse(chosenVerse);

    // esperar un poquito para asegurar render
    setTimeout(() => {
      const div = divRef.current;
      if (div) {
        html2canvas(div).then((canvas) => {
          const link = document.createElement("a");
          const cleanName = name.replace(/\s+/g, "_").toLowerCase();
          link.download = `cumpleanos-${cleanName}.png`;
          link.href = canvas.toDataURL();
          link.click();
        });
      }
    }, 500);
  }, [name, day, month, year]);

  return (
    <div
      ref={divRef}
      style={{
        width: "800px",
        height: "1300px",
        backgroundImage: `url(${require("../img/birthdays.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "150px",
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.73)",
          textAlign: "center",
          padding: "20px 0",
          color: "#f8d178",
        }}
      >
        <h2 style={{ fontSize: "36px", margin: 0, fontWeight: "bold" }}>
          {name}
        </h2>
        <p style={{ fontSize: "24px", margin: "8px 0 0 0" }}>
          {day} de {month} del {year}
        </p>
        <br />
        {verse && (
          <>
            <b style={{ fontSize: "20px", display: "block" }}>{verse.cita}</b>
            <p
              style={{
                fontSize: "18px",
                margin: "10px auto",
                maxWidth: "90%",
                lineHeight: "1.4",
                whiteSpace: "pre-line",
              }}
            >
              {verse.texto}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default GenerateImg;
