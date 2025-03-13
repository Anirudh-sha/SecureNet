function submitChoices() {
    let childrenControl = document.getElementById("children_control").checked;
    let spamProtection = document.getElementById("spam_protection").checked;

    let userChoices = {
        childrenControl: childrenControl,
        spamProtection: spamProtection
    };

    localStorage.setItem("userChoices", JSON.stringify(userChoices));

    alert("Preferences saved! Redirecting...");
    window.location.href = "result.html";
}
