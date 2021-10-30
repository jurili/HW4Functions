function encryptText() {
	var input = document.getElementById("input").value,
		passkey = document.getElementById("pass").value;
	document.getElementById("aesOut").value = CryptoJS.AES.encrypt(input, passkey);
	document.getElementById("sha1Out").value = CryptoJS.HmacSHA1(input, passkey);
	document.getElementById("sha224Out").value = CryptoJS.HmacSHA224(input, passkey);
	document.getElementById("sha256Out").value = CryptoJS.HmacSHA256(input, passkey);
}

function convertDec2Bin() {
    var val = parseInt(document.getElementById("val").value),
		out = 0,
		place = 1,
		rem = 0;
	if (!isNaN(val)) {
		while (val != 0) {
			rem = (val % 2);
			val = Math.floor(val / 2);
			out += (rem * place);
			place = (place * 10);
		}
    } else {
		alert("Please enter a valid input");
	}
	document.getElementById("out").value = out;
}

function convertBin2Dec() {
    var val = document.getElementById("val").value,
		valDigits = val.split(""),
		valLength = valDigits.length,
		place = valLength - 1,
		out = 0;
	if (!isNaN(parseInt(val))) {
		for (var i = 0; i < valLength; i++) {
			out += (valDigits[i] * Math.pow(2, place));
			place--;
		}
    } else {
		alert("Please enter a valid input");;
	}
	document.getElementById("out").value = out;
}