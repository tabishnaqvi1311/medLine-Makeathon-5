import React from 'react'

const Modal = () => {
  return (
    <form action="./doctorlist.html" className="dropdownMain">
        <label>Language</label>
            <select name="languages" className="lang">
                <option value="Patiala">Patiala</option>
                <option value="Rajpura">Rajpura</option>
                <option value="Ropar">Ropar</option>
                <option value="Jalandhar">Jalandhar</option>
                <option value="Mohali">Mohali</option>
            </select>
        <label>Specialty</label>
            <select name="className"  className="className">
                <option value="Dentist">Dentist</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="general-physician">General Physician</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="ENT">ENT</option>
                <option value="Psycologist">Psycologist</option>
                <option value="Homeopath">Homeopath</option>
            </select>
        <input type="submit" value="Search" className="searchbutt"/>
    </form>
  )
}

export default Modal