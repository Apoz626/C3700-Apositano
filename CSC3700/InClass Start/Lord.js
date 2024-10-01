let url = 'http://45.55.136.114/~dlash/CSC3700/lotrV4.php';

function loadItems() {
    let oStr = "";

    fetch(url)
        .then(response => response.json())
        .then(items => {
                        for (let i = 0; i < items.length; i++) {
                oStr += `<option value="${items[i].name}">${items[i].name}</option>`
            }
            document.getElementById("characters").innerHTML = oStr;
        });
}
function showCharacter() {
    let value = document.getElementById('characters').value;
    let charName = document.getElementById('charName');
    let charImg = document.getElementById('charImg');
    let charDesc = document.getElementById('charDesc');
    let name = '';
    let image = '';
    let desc = '';

    fetch(url)
        .then(response => response.json())
        .then(items => {
            for (let i = 0; i < items.length; i++) {
                if (value === items[i].name) {
                    name = items[i].name;
                    image = items[i].img;
                    desc = items[i].description;
                }
            }
            charName.innerText = name;
            charImg.innerHTML = `<img src="imgs/${image}">`
            charDesc.innerText = desc;
        });
    showTable(value);
}
function showTable(value) {
    let table = document.getElementById('table');

    fetch(url)
        .then(response => response.json())
        .then(items => {
            let oStr = `<tr>
                    <th><b>ID</b></th> 
                    <th><b>Name</b></th> 
                    <th><b>Age</b></th> 
                    <th><b>Race</b></th> 
                    <th><b>Strengths</b></th>
                    <th><b>Weakness</b></th>
                </tr>`;

            for (let i = 0; i < items.length; i++) {
                if (value === items[i].name) {
                    oStr += `<tr><td>${items[i].id}</td>`
                    oStr += `<td>${items[i].name}</td>`
                    oStr += `<td>${items[i].age}</td>`
                    oStr += `<td>${items[i].race}</td>`
                    oStr += `<td>${getStrengths(items[i].strengths)}</td>`
                    oStr += `<td>${getWeakness(items[i].weakness)}</td>`

                    oStr += `</tr>`
                }
            }
            table.innerHTML = oStr;
        });
}
function getStrengths(strengths) {
    let oStr = `<ol>`;

    for (let i = 0; i < strengths.length; i++) {
        oStr += `<li>${strengths[i]}</li>`
    }
    oStr += `</ol>`

    return oStr;

}
function getWeakness(weakness) {
    if (weakness.length === 0) {
        return 'No Weaknesses';
    }
    else {
        let oStr = `<ol>`;

        for (let i = 0; i < weakness.length; i++) {
            oStr += `<li>${weakness[i]}</li>`
        }
        oStr += `</ol>`

        return oStr;
    }
}