const {data: dato, btnSee: ver_btn, form: form, con_data: cont1, con_add: cont2, container: cont3, sidebar: side} = {
	data: document.querySelector(".container .container_see_info .see_info_data .data"),
  btnSee: document.querySelector(" .sidebar .sidebar_button"),
  form: document.querySelector(".container .container_add_info form"),
  con_data: document.querySelector(".container .container_see_info .see_info_data "),
  con_add: document.querySelector(".container .container_add_info"),
  container: document.querySelector(".container"),
  sidebar: document.querySelector(".sidebar")
}

const fetchPetition = async () => {
  const petition = await fetch("http://www.raydelto.org/agenda.php");
  return petition.json();
}

fetchPetition().then((data) => { 

  let info = data.map((d, i) => {
    
    let contact = `${d.nombre} ${d.apellido} - ${d.telefono}`;
    return(
    ` <div class="data_info">
        <i class="fas fa-user-circle"></i>
        <p>${contact}</p> 
      </div> `
    )
  }).flat().join('');

  dato.innerHTML = info;

  Swal.fire({
    title: 'Carga de Datos',
    text: 'Datos Cargados Correctamente',
    icon: 'info',
    showConfirmButton: true,
    confirmButtonColor:'#5169f1',
    confirmButtonText: 'Continuar'
  })
}).catch((err) => {
  Swal.fire({
    title: 'Ups!',
    text: 'Hubo algùn problema cargando los datos, por favor, recargue la página',
    icon: 'error',
    showConfirmButton: true,
      confirmButtonColor:'#5169f1',
      confirmButtonText: 'Ok..'
  })
})

dato.addEventListener("click", (e) => {
  const click = e.target;
  
  if(click.getAttribute("class") === "data"){
    return false;
  } else {
    Swal.fire({
      title: "Dato del Contacto",
      html: `<b>${click.textContent}</b>`,
      icon: 'info',
      showConfirmButton: true,
      confirmButtonColor:'#5169f1',
      confirmButtonText: 'Thanks!'
    })
  }
})

