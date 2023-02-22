import React, { useState, useEffect } from "react";
import "../css/delete.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function All() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onPress = () => {
    navigate("/panel");
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/showall")
      .then((response) => {
        let sortedInfo = response.data.sort((a, b) => {
          return new Date(b.fecha) - new Date(a.fecha);
        });
        setInfo(sortedInfo);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []); // agrega una dependencia adicional vacía para que useEffect se ejecute solo una vez

  return (
    <div className="container">
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-3 row-cols-md-2 row-cols-lg-3 g-4">
        {info.map((informacion) => {
          const fechaInformacion = informacion.fecha;
          const fechaInformacionGod = new Date(informacion.fecha);
          const fecha = new Date();

          const year = fecha.getFullYear();
          const month = String(fecha.getMonth() + 1).padStart(2, "0");
          const day = String(fecha.getDate()).padStart(2, "0");

          let hours = fecha.getHours();
          const amOrPm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12;
          hours = hours ? hours : 12;
          const minutes = String(fecha.getMinutes()).padStart(2, "0");

          const fechaFormateada = `${year}/${month}/${day} ${hours}:${minutes} ${amOrPm}`;
          const fechaFormateadaGod = new Date(fechaFormateada);
          // Obtener la diferencia de tiempo en milisegundos
          const diferenciaMilisegundos =
            fechaFormateadaGod - fechaInformacionGod;

          // Convertir la diferencia de tiempo a días
          const diferenciaDias = Math.round(
            diferenciaMilisegundos / (1000 * 60 * 60 * 24)
          );

          return informacion.infotype === "Texto" ? (
            <div className="container col">
              <div className="card h-100">
                
                <div className="card-body">
                {diferenciaDias <= 1 ? (
                        <div className="fst-italic" id="nuevo">
                          Nuevo
                        </div>
                      ) : (
                        <div></div>
                      )}<br/>
                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr />
                  <div>
                    <p className="card-text">
                      {informacion.description}
                      <br />
                      <br />
                      Dirigido a: <b>{informacion.grupo}</b>
                      <br />
                      <br />
                      <h6 className="fst-italic">{informacion.fecha}</h6>
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "Imagen" ? (
            <div className="container col">
              <div className="card h-100">
                <div>
                  {informacion.images.map((infoImage) => {
                    return (
                      <>
                        <div>
                          <center>
                            <img
                              src={`http://localhost:4000/uploads/images/${informacion.images[0].filename}`}
                              className={`card-img-top`}
                              onClick={() => {
                                window.open(
                                  `http://localhost:4000/uploads/images/${informacion.images[0].filename}`
                                );
                              }}
                            />
                          </center>

                          <br />
                          <br />
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="card-body">
                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr />
                  <p className="card-text">
                    {informacion.description}
                    <br />
                    <br />
                    Dirigido a: <b>{informacion.grupo}</b>
                    <br />
                    <br />
                    <h6 className="fst-italic">{informacion.fecha}</h6>
                    <br />
                    {diferenciaDias <= 1 ? (
                      <div className="fst-italic" id="nuevo">
                        Nuevo
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </p>
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "Link" ? (
            <div className="container col">
              <div className="card h-100">
                <div className="card-body">

                {diferenciaDias <= 1 ? (
                      <div className="fst-italic" id="nuevo">
                        Nuevo
                      </div>
                    ) : (
                      <div></div>
                    )}<br/>
                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr />
                  <div>
                    <p className="card-text">
                      {informacion.description}
                      <br />
                      <br />
                      Dirigido a: <b>{informacion.grupo}</b>
                      <br />
                      <h6 className="fst-italic">{informacion.fecha}</h6>
                      <br />
                    </p>
                  </div>
                  <a
                    href={informacion.link}
                    className="btn btn-primary deletebutton"
                  >
                    Redirigir al Link
                  </a>
                  <br />
                  <br />
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "Video" ? (
            <div className="container col">
              <div className="card h-100">
                <div>
                  {informacion.video.map((infoImage) => {
                    return (
                      <>
                        <video
                          src={`http://localhost:4000/uploads/videos/${informacion.video[0].filename}`}
                          className="card-img-top"
                          type="video/mp4"
                          controls
                        >
                          El navegador no soporta el archivos
                        </video>

                        <br />
                        <br />
                      </>
                    );
                  })}
                </div>

                <div className="card-body">
                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr />
                  <p className="card-text">
                    {informacion.description}
                    <br />
                    <br />
                    Dirigido a: <b>{informacion.grupo}</b>
                    <br />
                    <br />
                    <h6 className="fst-italic">{informacion.fecha}</h6>
                    <br />
                    {diferenciaDias <= 1 ? (
                      <div className="fst-italic" id="nuevo">
                        Nuevo
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </p>
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "PDF" ? (
            <div className="container col">
              <div className="card h-100">
                <div></div>

                <div className="card-body">

                {diferenciaDias <= 1 ? (
                      <div className="fst-italic" id="nuevo">
                        Nuevo
                      </div>
                    ) : (
                      <div></div>
                    )}<br/>


                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr /><br/>
                  <p className="card-text">
                    {informacion.description}
                    <br />
                    Dirigido a: <b>{informacion.grupo}</b>
                    <br />
                    <br/><br/>
                    <b>{informacion.fecha}</b>
                  </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                  {informacion.pdf.map((info) => {
                    return (
                      <>
                        <a
                          className="btn btn-success deletebutton"
                          download={`${informacion.pdf[0].filename}.pdf`}
                          href={`http://localhost:4000/uploads/pdf/${informacion.pdf[0].filename}`}
                          target="_blank"
                        >
                          Descargar Archivo
                        </a>

                        <br />
                        <br />
                      </>
                    );
                  })}

                  
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "Audio" ? (
            <div className="container col">
              <div className="card h-100">
                <div>
                  {informacion.audio.map((infoImage) => {
                    return (
                      <>
                        <br />
                        <audio
                          src={`http://localhost:4000/uploads/audio/${informacion.audio[0].filename}`}
                          className="audio"
                          type="audio/mpeg"
                          controls
                        >
                          El navegador no soporta el archivos
                        </audio>

                        <br />
                        <br />
                      </>
                    );
                  })}
                </div>

                <div className="card-body">
                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr />
                  <p className="card-text">
                    {informacion.description}
                    <br />
                    <br />
                    Dirigido a: <b>{informacion.grupo}</b>
                    <br />
                    <br />
                    <h6 className="fst-italic">{informacion.fecha}</h6>
                    <br />
                    {diferenciaDias <= 1 ? (
                      <div className="fst-italic" id="nuevo">
                        Nuevo
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </p>
                </div>
              </div>
              <br />
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
    </div>
  );
}
