function saveValues() {
            localStorage._city = document.getElementById("city").value;
        }

        function loadValues() {
        		if (localStorage._city == null)
        	document.getElementById("city").value = "";
        	else		
            document.getElementById("city").value = localStorage._city;
        }
