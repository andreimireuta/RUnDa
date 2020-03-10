function showDivJud() {
    if (document.getElementById('judete').style.display === "block")
        document.getElementById('judete').style.display = "none";
    else
        document.getElementById('judete').style.display = "block";

    document.getElementById('luni').style.display = "none";
    document.getElementById('varsta').style.display = "none";
    document.getElementById('mediu').style.display = "none";
    document.getElementById('studii').style.display = "none";
}
function showDivStudii() {
    if (document.getElementById('studii').style.display === "block")
        document.getElementById('studii').style.display = "none";
    else
        document.getElementById('studii').style.display = "block";

    document.getElementById('luni').style.display = "none";
    document.getElementById('varsta').style.display = "none";
    document.getElementById('mediu').style.display = "none";
    document.getElementById('judete').style.display = "none";
}
function showDivMediu() {
    if (document.getElementById('mediu').style.display === "block")
        document.getElementById('mediu').style.display = "none";
    else
        document.getElementById('mediu').style.display = "block";

    document.getElementById('luni').style.display = "none";
    document.getElementById('varsta').style.display = "none";
    document.getElementById('studii').style.display = "none";
    document.getElementById('judete').style.display = "none";
}
function showDivVarsta() {
    if (document.getElementById('varsta').style.display === "block")
        document.getElementById('varsta').style.display = "none";
    else
        document.getElementById('varsta').style.display = "block";

    document.getElementById('luni').style.display = "none";
    document.getElementById('mediu').style.display = "none";
    document.getElementById('studii').style.display = "none";
    document.getElementById('judete').style.display = "none";
}
function showDivLuni() {
    if (document.getElementById('luni').style.display === "block")
        document.getElementById('luni').style.display = "none";
    else
        document.getElementById('luni').style.display = "block";

    document.getElementById('varsta').style.display = "none";
    document.getElementById('mediu').style.display = "none";
    document.getElementById('studii').style.display = "none";
    document.getElementById('judete').style.display = "none";
}


function showDivPie() {
    document.getElementById('mainPie').style.display = "block";

    document.getElementById('mainBar').style.display = "none";
    document.getElementById('mainLine').style.display = "none";
    document.getElementById('mainMap').style.display = "none";
}

function showDivBar() {
    document.getElementById('mainBar').style.display = "block";

    document.getElementById('mainPie').style.display = "none";
    document.getElementById('mainLine').style.display = "none";
    document.getElementById('mainMap').style.display = "none";
}

function showDivLine() {
    document.getElementById('mainLine').style.display = "block";

    document.getElementById('mainBar').style.display = "none";
    document.getElementById('mainPie').style.display = "none";
    document.getElementById('mainMap').style.display = "none";
}

function showDivMap() {
    document.getElementById('mainMap').style.display = "block";

    document.getElementById('mainBar').style.display = "none";
    document.getElementById('mainPie').style.display = "none";
    document.getElementById('mainLine').style.display = "none";
}
