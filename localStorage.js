function saveValues() {
            localStorage._city = document.getElementById("city").value;
        }

        function loadValues() {
            document.getElementById("city").value = localStorage._city;
        }
function bodyOnLoad(){  
    loadValues();
}
function clearBox(city)
{
    document.getElementById("city").innerHTML = "";
}