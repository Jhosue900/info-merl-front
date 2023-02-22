import { useState, React, useEffect } from "react";
import "../css/delete.css";
import axios, { Axios } from "axios";
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
      .get("http://localhost:4000/showall")
      .then((response) => {
        setInfo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });

    let sortedInfo = info.sort((a, b) => {
      return new Date(b.fecha) - new Date(a.fecha);
    });

    setInfo(sortedInfo);
    console.log(info);
  }, []); // agrega una dependencia adicional vacía para que useEffect se ejecute solo una vez

  
  const handleDelete = (id, infoType) => {
    if (confirm("¿Está segur@ de que desea eliminar este elemento?")) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      axios
        .delete("http://localhost:4000/delete", {
          data: { id, infoType },
        })
        .then((response) => {
          if (response.data.status === 200) {
            alert("Se elimino correctamente");
          }
          // Aquí podrías actualizar el estado de tu componente si fuese necesario
        })
        .catch((error) => {
          console.error(
            "Ocurrió un error al intentar eliminar el elemento:",
            error
          );
        });

      window.scrollTo(0, scrollY);
      // Refrescar la pantalla
      location.reload();
    } else {
    }
  };

  


  
  return (
    <div className="container">
      <br />
      <br />
      <h2 className="title">Selecione la tarjeta y eliminela.</h2>
      <hr />
      <button className="btn btn-link" onClick={onPress}>
        Regresar
      </button>
      <br />
      <br />
      <br />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        {info.map((informacion) => {
          return informacion.infotype === "Texto" ? (
            <div className="container col">
              <div className="card">
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
              <div className="card">
                <div>
                  {informacion.images.map((infoImage) => {
                    return (
                      <>
                        <div>
                          <center>
                            <img
                              src={`http://localhost:4000/uploads/images/${informacion.images[0].filename}`}
                              className={`card-img-top`}
                              onClick={() => {window.open(`http://localhost:4000/uploads/images/${informacion.images[0].filename}`)}}
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
              <div className="card">
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
              <div className="card">
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
                  </p>

                  
                </div>
              </div>
              <br />
            </div>
          ) : informacion.infotype === "PDF" ? (
            <div className="container col">
              <div className="card">
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
              <div className="card">
                <div>
                  {informacion.audio.map((infoImage) => {
                    return (
                      <>
                        <br />
                        <audio
                          src={`http://localhost:4000/uploads/audio/${informacion.audio[0].filename}`}
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
