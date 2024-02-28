// Design a Spring Boot application to read First name, Middle Name and Last Name and store in data base with password generated through your JavaScript code (2 chars from each name + 3-digit random numbers)

// 1) post the Git link  
// 2) post the JavaScript logic in below given space 
*

function generatePassword(firstName, middleName, lastName) {
    // Extract first two characters from each name
    const firstChars = firstName.substring(0, 2).toLowerCase();
    const middleChars = middleName.substring(0, 2).toLowerCase();
    const lastChars = lastName.substring(0, 2).toLowerCase();
    
    // Generate a 3-digit random number
    const randomDigits = Math.floor(100 + Math.random() * 900);

    // Combine the extracted characters and random number to form the password
    const password = firstChars + middleChars + lastChars + randomDigits;

    return password;
}
