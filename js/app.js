fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // loop through the "dentists" array and generate HTML to display it
    let dentistList = document.getElementById('dentistList');

    data.dentists.forEach(dentist => {
      let dentistDiv = document.createElement('div');
      let name = document.createElement('h2');
      let specialty = document.createElement('p');
      let location = document.createElement('p');
      let phone = document.createElement('p');
      console.log(dentistDiv, name, specialty, location, phone);

      name.textContent = dentist.name;
      specialty.textContent = dentist.specialty;
      location.textContent = dentist.location;
      phone.textContent = dentist.phone;

      dentistDiv.appendChild(name);
      dentistDiv.appendChild(specialty);
      dentistDiv.appendChild(location);
      dentistDiv.appendChild(phone);

      dentistList.appendChild(dentistDiv);
    });
  })
  .catch(error => console.error(error));

// const findDoctor = () => {
//     let formMain = document.querySelector('form');
//     if(formMain.style.display == 'none'){
//         formMain.style.display = 'flex'
//     }
//     else{
//         formMain.style.display = 'none'
//     }
// }


