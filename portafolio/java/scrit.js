document.addEventListener('DOMContentLoaded', () => {

    if (document.title.includes('MATEO.F.S')){
        alert("¡Bienvenido a la página de Mateo Foronda! Disfruta navegando.");
    }
    
    if (document.title.includes('PETS')){
        alert("¡Bienvenido a pets!")
    }
});


document.getElementById('toggle-content-button').addEventListener('click', function() {
    console.log("show projects...");
    const content = document.getElementById('project');
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});