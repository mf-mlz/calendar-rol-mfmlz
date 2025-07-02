import React, { useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import html2canvas from "html2canvas";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Mycalendar = ({ events, month, year, role }) => {
  const divRef = useRef();

  const handleSelectEvent = (event) => {
    if (role === "Cumpleaños") {
      const img = require("../img/birthdays.png");

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
        {
          cita: "Salmo 23:1",
          texto: "El Señor es mi pastor; nada me falta.",
        },
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
            "Este es el día que hizo el Señor; nos gozaremos y alegraremos en él.",
        },
      ];
      const randomIndex = Math.floor(Math.random() * versiculos.length);

      const div = divRef.current;
      if (!div) return;

      div.innerHTML = `
  <div style="
  width: 800px; 
  height: 1300px; 
  background-image: url('${img}');
  background-size: cover;
  background-position: center;
  position: relative;
  font-family: 'Arial', sans-serif;
  color: white;
">

  <div style="
    position: absolute;
    bottom: 150px; 
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    text-align: center;
    padding: 20px 0;
    color: #f8d178;
  ">
    <h2 style="font-size: 36px; margin: 0; font-weight: bold;">${
      event.title
    }</h2>
    <p style="font-size: 24px; margin: 8px 0 0 0;">${moment(event.start).format(
      "D [de] MMMM [de] YYYY"
    )}</p>
    <br>
    <b style="font-size:20px;">${versiculos[randomIndex].cita}</b><br>
    <p style="
  font-size: 20px; 
  font-weight: bold; 
  max-width: 80%; 
  margin: 12px auto 0 auto; 
  word-wrap: break-word;
  text-align: center;
">
  <em>${versiculos[randomIndex].texto}</em>
</p>
  </div>
</div>
`;

      html2canvas(div).then((canvas) => {
        const link = document.createElement("a");
        const cleanName = event.title.replace(/\s+/g, "_").toLowerCase();
        link.download = `cumpleanos-${cleanName}.png`;
        link.href = canvas.toDataURL();
        link.click();
        div.innerHTML = "";
      });
    }
  };

  return (
    <>
      <div ref={divRef} style={{ position: "absolute", left: "-9999px" }}></div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
        toolbar={false}
        defaultDate={new Date(year, month, 1)}
        style={{ height: 500, width: 800, backgroundColor: "white" }}
        onSelectEvent={handleSelectEvent}
      />
    </>
  );
};

export default Mycalendar;
