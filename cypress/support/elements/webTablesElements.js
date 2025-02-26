class WebTablesElements {
    inputFirstName = () => { return "#firstName" }
    inputLastName = () => { return "#lastName" }
    inputUserEmail = () => { return "#userEmail" }
    inputAge = () => { return "#age" }
    inputSalary = () => { return "#salary" }
    inputDepartment = () => { return "#department" }
    btnAddNewUser = () => { return "#addNewRecordButton" }
    btnSubmitNewUser = () => { return "#submit" }
    btnDeleteUserByIndex = (userIndex) => { return `#delete-record-${userIndex}` }
    btnEditUserByIndex = (userIndex) => { return `#edit-record-${userIndex}` }
    inputSearchBox = () => { return "#searchBox" }
    btnSearchBox = () => { return "#basic-addon2" }
}
  
export default WebTablesElements;