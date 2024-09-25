document
  .getElementById("boton")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    let extensiones = ["jpg", "jpeg", "png"];
    let fileInput = document.getElementById("file-input");

    let file = fileInput.files[0];

    let extension = file.name.split(".").pop().toLowerCase();
    if (!extensiones.includes(extension)) {
      swal(
        "Archivo incorrecto:",
        "Solo se aceptan imagenes con extenciones .jpg .png .jpeg",
        "error"
      );
      return;
    }

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(
          "http://192.18.1.20:5000/api/modelo_cana/v1.0/diagnostico",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();
        texto =
          "Enfermedad: " +
          result.message +
          " Probabilidad: " +
          result.porcentaje +
          "%";

        const reader = new FileReader();

        reader.onload = function (e) {
          Swal.fire({
            imageUrl: e.target.result,
            imageHeight: 400,
            title: "Imagen seleccionada",
            text: texto,
            confirmButtonText: "Listo",
          }).then((clic) => {
            if (clic.isConfirmed) {
              //mostrar_info(mapa, result.message)
              Swal.fire("Tarea finalizada con éxito", "", "success");
            }
          });
        };

        reader.readAsDataURL(file);
      } catch (error) {
        swal(
          "Error fatal:",
          "Reinicie la pagina para volverlo a intentar",
          "error"
        );
        console.log(error);
      }
    } else {
      swal("¿Seleccionaste una imagen?", "No se encontro la imagen", "info");
    }
  });
