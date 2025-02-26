function calculateAge() {
    // Get the birthdate value from the input
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    // Check if a date was entered
    if (!birthdate) {
        result.textContent = "Please enter your birthdate!";
        return;
    }

    // Convert birthdate string to Date object
    const birthDate = new Date(birthdate);
    const today = new Date();

    // Calculate the difference in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if birthday hasn't occurred this year yet
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the result
    result.textContent = `You are ${age} years old!`;
}