import { faker } from '@faker-js/faker';

class UserFactory {
    generateRandomUser() {
        const randomDate = faker.date.past().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
        const subjectsOptions = [
            "Accounting", "Arts", "Biology", "Chemistry","Civics",
            "Commerce", "Computer Science", "Economics", "English", 
            "Hindi", "History", "Maths", "Physics", "Social Studies"
        ]
        const hobbyOptions = ['Sports', 'Reading', 'Music']
        const fullAddress = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}, ${faker.location.country()} - ${faker.location.zipCode()}`;

        const stateAndCityOptions = [
            { state: 'NCR', cities: ['Delhi', 'Gurgaon', 'Noida']  },
            { state: 'Uttar Pradesh', cities: ['Agra', 'Lucknow', 'Merrut'] },
            { state: 'Haryana', cities: ['Karnal', 'Panipat'] },
            { state: 'Rajasthan', cities: ['Jaipur', 'Jaiselmer'] }
        ];
        const stateAndCity = faker.helpers.arrayElement(stateAndCityOptions);

        const randomUser = {
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "phone": faker.string.numeric(10),
            "address": faker.location.streetAddress(),
            "gender": faker.helpers.arrayElement(['Male', 'Female', 'Other']),
            "birthDate": randomDate,
            "subject": faker.helpers.arrayElement(subjectsOptions),
            "hobby": faker.helpers.arrayElement(hobbyOptions),
            "address": fullAddress,
            "state": stateAndCity.state,
            "city": faker.helpers.arrayElement(stateAndCity.cities)
        }

        return randomUser
    }
    
    generateRandomRegister() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 65 }),
            salary: faker.number.int({ min: 30000, max: 150000 }),
            department: faker.commerce.department()
        };
    }
}

export default UserFactory
