function go() {
    let name = document.getElementById("name");
    let movies = document.querySelectorAll('input[type="checkbox"]:checked').length;

    alert(name.value + "님, 저와 " + movies + "개의 취향이 같으시네요!");
}

function reset() {
    const checkboxes = document.getElementsByName("movie");

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })
}



