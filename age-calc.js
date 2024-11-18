function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (isNaN(birthdate)) {
        document.getElementById("result").innerText = "Please enter a valid birthdate.";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").innerText = `You are ${age} years old.`;
}
