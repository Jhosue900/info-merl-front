import { React, useState } from "react";
import axios from "axios";
import "../css/create.css";
import { useNavigate } from "react-router-dom";

export default function CreateInfo() {

  const navigate = useNavigate()
  const [infoType, setInfoType] = useState("No Selected");

  const [infoNone, setInfoNone] = useState({
    title: "",
    description: "",
    grupo: "No Selected",
    info: "Texto"
  });

  const [infoLink, setInfoLink] = useState({
    title: "",
    description: "",
    grupo: "No Selected",
    link: "",
    info: "Link"
  });

  const [infoImage, setInfoImage] = useState({
    title: "",
    description: "",
    grupo: "No Selected",
    imagen: "",
    info: "Imagen"
  });

  const [infoVideo, setInfoVideo] = useState({
    title: "",
    description: "",
    grupo: "No Selected",
    video: "",
    info: "Video"
  });

  const [infoPDF, setInfoPDF] = useState({
    title: "",
    description: "",
    grupo: "No Selected",
    pdf: "",
    info: "PDF"
  });


  const [infoAudio, setInfoAudio] = useState({
    title: "",
    description: "",
    grupo: "No Selected",
    audio: "",
    info: "Audio"
  });

  {
    /* Just Text Information*/
  }
  const handleChangeText = (event) => {
    setInfoNone({
      ...infoNone,
      [event.target.name]: event.target.value,
    });
  };

  const onPressText = () => {
    const title = infoNone.title;
    const description = infoNone.description;
    const grupo = infoNone.grupo;

    if (title == "") {
      alert("Rellene Los Campos");
      return;
    } else {
      if (description == "") {
        alert("Rellene Los Campos");
        return;
      } else {
        if (grupo == "No Selected") {
          alert("Rellene Los Campos");
          return;
        } else {
          console.log(infoNone);
        }
      }
    }

    axios.post("http://localhost:4000/InfoNone", infoNone)
      .then((response) => {
        if (response.data.status == 200) {
          alert("Se Publico Correctamente");
        } else {
          if (response.data.status == 500) {
            alert("Error Al Publicar");
          }
        }
      })
      .catch((error) => console.error(error));
  };

  {
    /* Link Information*/
  }

  const handleChangeLink = (event) => {
    setInfoLink({
      ...infoLink,
      [event.target.name]: event.target.value,
    });
  };

  const onPressLink = () => {
    const title = infoLink.title;
    const description = infoLink.description;
    const grupo = infoLink.grupo;
    const link = infoLink.link;

    if (title == "") {
      alert("Rellene Los Campos");
      return;
    } else {
      if (description == "") {
        alert("Rellene Los Campos");
        return;
      } else {
        if (grupo == "No Selected") {
          alert("Rellene Los Campos");
          return;
        } else {
          if (link == "") {
            alert("Rellene Los Campos");
            return;
          } else {
            axios.post("http://localhost:4000/link", infoLink)
              .then((response) => {
                if (response.data.status == 200) {
                  alert("Se Publico Correctamente");
                } else {
                  if (response.data.status == 500) {
                    alert("Error Al Publicar");
                  }
                }
              })
              .catch((error) => console.error(error));
          }
        }
      }
    }
  };

  {
    /* Image Information*/
  }

  const handleChangeImage = (event) => {
    const target = event.target;
    const name = target.name;
    if(name === 'imagen'){
        setInfoImage({ ...infoImage, [name]: event.target.files });
    }else{
        setInfoImage({ ...infoImage, [name]: target.value });
    }
  };

  const onPressImage = () => {
    const formData = new FormData();
    Array.from(infoImage.imagen).forEach(file => formData.append('imagen', file));
    formData.append('title', infoImage.title);
    formData.append('description', infoImage.description);
    formData.append('grupo', infoImage.grupo);
    formData.append('info', infoImage.info);

    axios.post('http://localhost:4000/image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {
      if (response.status == 200) {
        alert("Publicado Correctamente")
      }else{
        if (response.status == 500) {
          alert("Error Al Publicar La Informacion")
        }
      }
    })
    .catch(error => console.error(error));
  }

  {
    /* Video Information*/
  }

  const handleChangeVideo = (event) => {
    const target = event.target;
    const name = target.name;
    if(name === 'video'){
        setInfoVideo({ ...infoVideo, [name]: event.target.files });
    }else{
        setInfoVideo({ ...infoVideo, [name]: target.value });
    }
  };


  const onPressVideo = () => {
    const formData = new FormData();
    Array.from(infoVideo.video).forEach(file => formData.append('video', file));
    formData.append('title', infoVideo.title);
    formData.append('description', infoVideo.description);
    formData.append('grupo', infoVideo.grupo);
    formData.append('info', infoVideo.info);

    axios.post('http://localhost:4000/video', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {
      if (response.status == 200) {
        alert("Publicado Correctamente")
      }else{
        if (response.status == 500) {
          alert("Error Al Publicar La Informacion")
        }
      }
    })
    .catch(error => console.error(error));
  }

  {
    /* PDF Information*/
  }

  const handleChangePDF = (event) => {
    const target = event.target;
    const name = target.name;
    if(name === 'pdf'){
        setInfoPDF({ ...infoPDF, [name]: event.target.files });
    }else{
        setInfoPDF({ ...infoPDF, [name]: target.value });
    }
  };


  const onPressPDF = () => {
    const formData = new FormData();
    Array.from(infoPDF.pdf).forEach(file => formData.append('pdf', file));
    formData.append('title', infoPDF.title);
    formData.append('description', infoPDF.description);
    formData.append('grupo', infoPDF.grupo);
    formData.append('info', infoPDF.info);

    axios.post('http://localhost:4000/pdf', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {
      if (response.status == 200) {
        alert("Publicado Correctamente")
      }else{
        if (response.status == 500) {
          alert("Error Al Publicar La Informacion")
        }
      }
    })
    .catch(error => console.error(error));
  }


  {
    /* Audio Information*/
  }

  const handleChangeAudio = (event) => {
    const target = event.target;
    const name = target.name;
    if(name === 'audio'){
        setInfoAudio({ ...infoAudio, [name]: event.target.files });
    }else{
        setInfoAudio({ ...infoAudio, [name]: target.value });
    }
  };


  const onPressAudio = () => {
    const formData = new FormData();
    Array.from(infoAudio.audio).forEach(file => formData.append('audio', file));
    formData.append('title', infoAudio.title);
    formData.append('description', infoAudio.description);
    formData.append('grupo', infoAudio.grupo);
    formData.append('info', infoAudio.info);

    axios.post('http://localhost:4000/audio', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {
      if (response.status == 200) {
        alert("Publicado Correctamente")
      }else{
        if (response.status == 500) {
          alert("Error Al Publicar La Informacion")
        }
      }
    })
    .catch(error => console.error(error));
  }

  const onPressRegresar = () => {

    navigate('/panel')
  }


  return (
    <div className="container">
      <br />
      <br />

      <div id="general">
        <h2>Crear Informacion</h2>
        <hr id="hr" />
        <br />

        <button className="btn btn-link" onClick={onPressRegresar}>Regresar</button>
        <br />
        <br />
        <select
          className="form-select"
          aria-label="Default select example"
          id="select"
          value={infoType}
          onChange={(e) => {
            setInfoType(e.target.value);
          }}
        >
          <option value="No Selected">Seleccione El Tipo De Informacion</option>
          <option value="Solo Texto">Solo Texto</option>
          <option value="Imagenes">Imagenes</option>
          <option value="Video">Video</option>
          <option value="PDF">PDF</option>
          <option value="Audio">Audio</option>
          <option value="Link">Link</option>
        </select>
      </div>
      <br />
      <br />

      {infoType === "Solo Texto" && (
        <div id="p">
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titulo:
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={infoNone.title}
                onChange={handleChangeText}
                required
              />
            </div>
            <br />
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripcion (Informacion):
              </label>
              <textarea
                className="form-control"
                id="title"
                name="description"
                value={infoNone.description}
                onChange={handleChangeText}
                rows="3"
                required
              ></textarea>
            </div>
            <br />

            <select
              className="form-select"
              aria-label="Default select example"
              id="select"
              name="grupo"
              onChange={handleChangeText}
              value={infoNone.grupo}
              required
            >
              <option value="No Selected">
                Seleccione El Grado Al Que Va Dirigido
              </option>
              <option value="Sexto">Grado 6</option>
              <option value="Septimo">Grado 7</option>
              <option value="Octavo">Grado 8</option>
              <option value="Noveno">Grado 9</option>
              <option value="Decimo">Grado 10</option>
              <option value="Once">Grado 11</option>
              <option value="Todos">Todos</option>
            </select>
            <br />

            <button
              type="button"
              id="btn"
              onClick={onPressText}
              className="btn btn-dark"
            >
              Publicar
            </button>
          </div>
        </div>
      )}
      {infoType === "Imagenes" && (
        <div id="p">
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titulo:
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={infoImage.title}
                onChange={handleChangeImage}
                required
              />
            </div>
            <br />
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripcion (Informacion):
              </label>
              <textarea
                className="form-control"
                id="title"
                name="description"
                value={infoImage.description}
                onChange={handleChangeImage}
                rows="3"
                required
              ></textarea>
            </div>
            <br />

            <select
              className="form-select"
              aria-label="Default select example"
              id="select"
              name="grupo"
              onChange={handleChangeImage}
              value={infoImage.grupo}
              required
            >
              <option value="No Selected">
                Seleccione El Grado Al Que Va Dirigido
              </option>
              <option value="Sexto">Grado 6</option>
              <option value="Septimo">Grado 7</option>
              <option value="Octavo">Grado 8</option>
              <option value="Noveno">Grado 9</option>
              <option value="Decimo">Grado 10</option>
              <option value="Once">Grado 11</option>
              <option value="Todos">Todos</option>
            </select>
            <br />

            <div className="mb-3">
              
              <input
                className="form-control"
                type="file"
                id="title"
                name="imagen"
                multiple
                onChange={handleChangeImage}
                required
              /><br/>
            </div>

            <button
              type="button"
              id="btn"

              onClick={onPressImage}
              className="btn btn-dark"
            >
              Publicar
            </button><br/><br/>
          </div>
        </div>
      )}
      {infoType === "Video" && (
         <div id="p">
         <div className="container">
           <div className="mb-3">
             <label htmlFor="exampleFormControlInput1" className="form-label">
               Titulo:
             </label>
             <input
               type="text"
               className="form-control"
               name="title"
               id="title"
               value={infoVideo.title}
               onChange={handleChangeVideo}
               required
             />
           </div>
           <br />
           <div className="mb-3">
             <label
               htmlFor="exampleFormControlTextarea1"
               className="form-label"
             >
               Descripcion (Informacion):
             </label>
             <textarea
               className="form-control"
               id="title"
               name="description"
               value={infoVideo.description}
               onChange={handleChangeVideo}
               rows="3"
               required
             ></textarea>
           </div>
           <br />

           <select
             className="form-select"
             aria-label="Default select example"
             id="select"
             name="grupo"
             onChange={handleChangeVideo}
             value={infoVideo.grupo}
             required
           >
             <option value="No Selected">
               Seleccione El Grado Al Que Va Dirigido
             </option>
             <option value="Sexto">Grado 6</option>
             <option value="Septimo">Grado 7</option>
             <option value="Octavo">Grado 8</option>
             <option value="Noveno">Grado 9</option>
             <option value="Decimo">Grado 10</option>
             <option value="Once">Grado 11</option>
             <option value="Todos">Todos</option>
           </select>
           <br />

           <div className="mb-3">
             
             <input
               className="form-control"
               type="file"
               id="title"
               name="video"
               multiple
               onChange={handleChangeVideo}
               required
             /><br/>
           </div>

           <button
             type="button"
             id="btn"
             onClick={onPressVideo}
             className="btn btn-dark"
           >
             Publicar
           </button><br/><br/>
         </div>
       </div>
     
      )}
      {infoType === "PDF" && (
         (
          <div id="p">
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titulo:
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={infoPDF.title}
                onChange={handleChangePDF}
                required
              />
            </div>
            <br />
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripcion (Informacion):
              </label>
              <textarea
                className="form-control"
                id="title"
                name="description"
                value={infoPDF.description}
                onChange={handleChangePDF}
                rows="3"
                required
              ></textarea>
            </div>
            <br />
 
            <select
              className="form-select"
              aria-label="Default select example"
              id="select"
              name="grupo"
              onChange={handleChangePDF}
              value={infoPDF.grupo}
              required
            >
              <option value="No Selected">
                Seleccione El Grado Al Que Va Dirigido
              </option>
              <option value="Sexto">Grado 6</option>
              <option value="Septimo">Grado 7</option>
              <option value="Octavo">Grado 8</option>
              <option value="Noveno">Grado 9</option>
              <option value="Decimo">Grado 10</option>
              <option value="Once">Grado 11</option>
              <option value="Todos">Todos</option>
            </select>
            <br />
 
            <div className="mb-3">
              
              <input
                className="form-control"
                type="file"
                id="title"
                name="pdf"
                multiple
                onChange={handleChangePDF}
                required
              /><br/>
            </div>
 
            <button
              type="button"
              id="btn"
              onClick={onPressPDF}
              className="btn btn-dark"
            >
              Publicar
            </button><br/><br/>
          </div>
        </div>
      
       )
      )}
      {infoType === "Audio" && (
          <div id="p">
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titulo:
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={infoAudio.title}
                onChange={handleChangeAudio}
                required
              />
            </div>
            <br />
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripcion (Informacion):
              </label>
              <textarea
                className="form-control"
                id="title"
                name="description"
                value={infoAudio.description}
                onChange={handleChangeAudio}
                rows="3"
                required
              ></textarea>
            </div>
            <br />
 
            <select
              className="form-select"
              aria-label="Default select example"
              id="select"
              name="grupo"
              onChange={handleChangeAudio}
              value={infoAudio.grupo}
              required
            >
              <option value="No Selected">
                Seleccione El Grado Al Que Va Dirigido
              </option>
              <option value="Sexto">Grado 6</option>
              <option value="Septimo">Grado 7</option>
              <option value="Octavo">Grado 8</option>
              <option value="Noveno">Grado 9</option>
              <option value="Decimo">Grado 10</option>
              <option value="Once">Grado 11</option>
              <option value="Todos">Todos</option>
            </select>
            <br />
 
            <div className="mb-3">
              
              <input
                className="form-control"
                type="file"
                id="title"
                name="audio"
                multiple
                onChange={handleChangeAudio}
                required
              /><br/>
            </div>
 
            <button
              type="button"
              id="btn"
              onClick={onPressAudio}
              className="btn btn-dark"
            >
              Publicar
            </button><br/><br/>
          </div>
        </div>
      
       )}
      {infoType === "Link" && (
        <div id="p">
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titulo:
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={infoLink.title}
                onChange={handleChangeLink}
              />
            </div>
            <br />
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripcion (Informacion):
              </label>
              <textarea
                className="form-control"
                id="title"
                name="description"
                value={infoLink.description}
                onChange={handleChangeLink}
                rows="3"
                required
              ></textarea>
            </div>
            <br />

            <select
              className="form-select"
              aria-label="Default select example"
              id="select"
              name="grupo"
              onChange={handleChangeLink}
              value={infoLink.grupo}
            >
              <option value="No Selected">
                Seleccione El Grado Al Que Va Dirigido
              </option>
              <option value="Sexto">Grado 6</option>
              <option value="Septimo">Grado 7</option>
              <option value="Octavo">Grado 8</option>
              <option value="Noveno">Grado 9</option>
              <option value="Decimo">Grado 10</option>
              <option value="Once">Grado 11</option>
              <option value="Todos">Todos</option>
            </select>
            <br />
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Link:
              </label>
              <input
                type="text"
                className="form-control"
                name="link"
                id="title"
                value={infoLink.link}
                onChange={handleChangeLink}
              />
            </div>
            <br />

            <button
              type="button"
              id="btn"
              onClick={onPressLink}
              className="btn btn-dark"
            >
              Publicar
            </button>
            <br />
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
