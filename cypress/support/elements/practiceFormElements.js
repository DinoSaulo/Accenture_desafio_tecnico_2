class PracticeFormElements {
    inputfirstName = () => { return "#firstName" }
    inputLastName = () => { return "#lastName" }
    inputEmail = () => { return "#userEmail" }
    inputGender = (gender) => { return `//div[@id='genterWrapper']//input[@value='${gender}']` }
    inputPhoneNumber = () => { return "#userNumber" }
    inputBirthDate = () => { return "#dateOfBirthInput" }
    inputSubjects = () => { return "#subjectsInput" }
    inputHobbies = (hobbyOption) => { return `//div[@id='hobbiesWrapper']//label[contains(text(),'${hobbyOption}')]//preceding-sibling::input` }
    inputUploadPicture = () => { return "#uploadPicture" }
    inputCurrentAddress = () => { return "#currentAddress" }
    inputState = () => { return "#state" }
    inputCity = () => { return "#city" }
    btnSubmit = () => { return "#submit" }
    modalDataTable = () => { return "//div[@class='table-responsive']/table/tbody/tr" }
    btnCloseModal = () => { return "#closeLargeModal" }
}
  
export default PracticeFormElements;