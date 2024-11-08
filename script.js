var modal = document.getElementById("modalContainer");
var modalContent = document.getElementById("modalContent");

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    // Add glitch effect on theme change
    document.body.style.animation = 'glitch 0.3s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);
}

function displayModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    modalContent.innerHTML = ""; // Clear modal content when closing
}

function displayOnModal(clickedDiv) {
    // Find the .modal-candidate within the clicked div
    var candidateContent = clickedDiv.querySelector(".modal-candidate");

    if (candidateContent) {
        // Clear any previous content in the modal
        modalContent.innerHTML = "";

        // Append each child of .modal-candidate to modalContent
        Array.from(candidateContent.childNodes).forEach(child => {
            // Clone each child node and append to modalContent
            var clonedChild = child.cloneNode(true);
            modalContent.appendChild(clonedChild);
        });

        // Display the modal
        displayModal();
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60;  // The gap you want to leave at the top

        if (target) {
            const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        }
    });
});