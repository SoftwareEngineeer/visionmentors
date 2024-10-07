document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    var form = event.target;
    var data = new FormData(form);  // Collect form data

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            // Hide the form and show the success message
            document.getElementById('newsletterForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        } else {
            response.json().then(function(data) {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('There was an error submitting the form.');
                }
            });
        }
    }).catch(function(error) {
        alert('There was a problem submitting the form.');
    });
});
