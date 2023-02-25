import { useState, React, useEffect } from "react";
import "../css/delete.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Delete() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onPress = () => {
    navigate("/panel");
  };

  useEffect(() => {
    axios
      .get("https://info-merl-production.up.railway.app/showall")
      .then((response) => {
        console.log(response);

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

  const handleDelete = async (id, infoType) => {
    if (confirm("¿Está seguro de que desea eliminar este elemento?")) {
      try {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        await axios.delete("https://info-merl-production.up.railway.app/delete", { data: { id, infoType } });
        alert("Se eliminó correctamente");
        location.reload();
        window.scrollTo(0, scrollY);
      } catch (error) {
        console.error("Ocurrió un error al intentar eliminar el elemento:", error);
      }
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <h2 className="title">Seleccione la tarjeta y elimínela.</h2>
      <hr />
      <button className="btn btn-link" onClick={onPress}>
        Regresar
      </button>
      <br />
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-3 row-cols-md-2 row-cols-lg-3 g-4">
        {info.map((informacion) => {
          return informacion.infotype === "Texto" ? (
            <div className="container col">
              <div className="card h-100">
                <div className="card-body">
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

                  <button
                    className="btn btn-danger deletebutton"
                    onClick={() =>
                      handleDelete(informacion.id, informacion.infotype)
                    }
                  >
                    Eliminar
                  </button>
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
                              src={`https://info-merl-production.up.railway.app/uploads/images/${informacion.images[0].filename}`}
                              className={`card-img-top`}
                              onClick={() => {window.open(`https://info-merl-production.up.railway.app/uploads/images/${informacion.images[0].filename}`)}}
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
                  </p>

                  <button
                    className="btn btn-danger deletebutton"
                    onClick={() =>
                      handleDelete(informacion.id, informacion.infotype)
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "Link" ? (
            <div className="container col">
              <div className="card h-100">
                <div className="card-body">
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
                  </a>{" "}
                  <br />
                  <br />
                  <button
                    className="btn btn-danger deletebutton"
                    onClick={() =>
                      handleDelete(informacion.id, informacion.infotype)
                    }
                  >
                    Eliminar
                  </button>
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
                          src={`https://info-merl-production.up.railway.app/uploads/videos/${informacion.video[0].filename}`}
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
                  <h5 className="card-title"> {informacion.title} </h5>
                  <hr />
                  <p className="card-text">
                    {informacion.description}
                    <br />
                    <br />
                    Dirigido a: <b>{informacion.grupo}</b>
                    <br />
                    <hr />
                    <b>{informacion.fecha}</b>
                  </p>

                  {informacion.pdf.map((info) => {
                    return (
                      <>
                        <a
                          className="btn btn-success deletebutton"
                          download={`${informacion.pdf[0].filename}.pdf`}
                          href={`https://info-merl-production.up.railway.app/uploads/pdf/${informacion.pdf[0].filename}`}
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
                          src={`https://info-merl-production.up.railway.app/uploads/audio/${informacion.audio[0].filename}`}
                          className="card-img-top"
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
                  </p>

                  <button
                    className="btn btn-danger deletebutton"
                    onClick={() =>
                      handleDelete(informacion.id, informacion.infotype)
                    }
                  >
                    Eliminar
                  </button>
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
