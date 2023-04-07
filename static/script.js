function Add() {
    let fio = document.getElementById('fio').value
    let number = document.getElementById('number').value
    fetch('/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'text/html'},
        body: JSON.stringify({fio: fio, number: number})
    })
    .then(response => {return response.text() })
    .then((body) => {
        var newHTML = document.open("text/html", "replace"); 
        newHTML.write(body); 
        newHTML.close(); 
        document.location='/'
    })
}


function Edit() {
    let fio = document.getElementById('fio').value
    let number = document.getElementById('number').value
    fetch('/update', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json','Accept':'text/html'},
                    body: JSON.stringify({fio: fio, number: number})
    })
    .then(response => {return response.text() })
    .then((body) => {
        var newHTML = document.open("text/html", "replace"); 
        newHTML.write(body); 
        newHTML.close(); 
        document.location='/';
    })
}

function Delete() {
    let fio = document.getElementById('fio').value
    fetch('/delete', {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'text/html'},
        body: JSON.stringify({fio: fio})
    })
    .then(response => {return response.text() })
    .then((body) => {
    var newHTML = document.open("text/html", "replace"); 
    newHTML.write(body); 
    newHTML.close();
    document.location='/' 
    })
}