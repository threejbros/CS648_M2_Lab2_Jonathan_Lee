window.addEventListener("load", () => {
    const $ = (id) => window.document.getElementById(id);      // helper function to get element by id
    $("empForm").reset();       // to clear the form when the page loads

    $("empForm").addEventListener("submit", (e) => {
        e.preventDefault();
        console.clear();        // to clear the console for each submit       
        console.log("ID: " + $("id").value);
        console.log("Name: " + $("name").value);
        console.log("Extension: " + $("ext").value);
        console.log("Email: " + $("email").value);
        console.log("Department: " + $("department").value);
        e.target.reset();       // to clear the form after each submit   
    });
});