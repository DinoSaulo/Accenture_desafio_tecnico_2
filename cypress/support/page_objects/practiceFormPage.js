import PracticeFormElements from "../elements/practiceFormElements"

const practiceFormElements = new PracticeFormElements();
const path = require('path');

class PracticeFormPage {
    fillInputsWithRandomData(randomUser){
        cy.get(practiceFormElements.inputState()).type(randomUser.state+'{enter}{enter}');
        cy.wait(500);
        cy.get(practiceFormElements.inputCity()).type(randomUser.city+'{enter}{enter}');
        cy.wait(500);
        cy.get(practiceFormElements.inputfirstName()).type(randomUser.firstName);
        cy.get(practiceFormElements.inputLastName()).type(randomUser.lastName);
        cy.get(practiceFormElements.inputEmail()).type(randomUser.email);
        cy.get(practiceFormElements.inputPhoneNumber()).type(randomUser.phone);
        cy.xpath(practiceFormElements.inputGender(randomUser.gender)).check({ force: true });
        cy.get(practiceFormElements.inputBirthDate()).type('{selectall}').type(randomUser.birthDate);
        cy.get(practiceFormElements.inputfirstName()).click();//by pass to close the date-picker
        cy.get(practiceFormElements.inputSubjects()).type(randomUser.subject);
        cy.get(practiceFormElements.inputSubjects()).type('{enter}');
        cy.xpath(practiceFormElements.inputHobbies(randomUser.hobby)).check({ force: true });
        cy.get(practiceFormElements.inputCurrentAddress()).type(randomUser.address);
    }

    attachTxtFile(textFile){
        cy.get(practiceFormElements.inputUploadPicture()).selectFile(textFile, { action: 'select' });
    }

    submitForm(){
        cy.get(practiceFormElements.btnSubmit()).click();
    }

    validateModalData(randomUser, txtFile){
        console.log(randomUser)
        const expectedData = {
            'Student Name': `${randomUser.firstName} ${randomUser.lastName}`,
            'Student Email': randomUser.email,
            'Gender': randomUser.gender,
            'Mobile': randomUser.phone,
            'Date of Birth': this.formatDataToModal(randomUser.birthDate),
            'Subjects': randomUser.subject,
            'Hobbies': randomUser.hobby,
            'Picture': path.basename(txtFile),
            'Address': randomUser.address,
            'State and City': `${randomUser.state} ${randomUser.city}`
          };

        cy.get('.table tbody tr').each(($row) => {
            const label = $row.find('td').first().text().trim();
            const value = $row.find('td').last().text().trim();
      
            if (expectedData[label]) {
              expect(value).to.eq(expectedData[label]);
            }
        });
    }

    formatDataToModal(dateStr){
        const months = {
            Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April',
            May: 'May', Jun: 'June', Jul: 'July', Aug: 'August',
            Sept: 'September', Oct: 'October', Nov: 'November', Dec: 'December'
          };
        
          const [day, monthAbbr, year] = dateStr.split(' ');  
          const fullMonth = months[monthAbbr];
        
          return fullMonth ? `${day} ${fullMonth},${year}` : 'Invalid date format';
    }

    closeModal(){      
        cy.get(practiceFormElements.btnCloseModal()).click();
    }

}

export default PracticeFormPage