
var daduAcak1 = Math.floor(Math.random() * 6)+1;
var gambarDaduAcak1 = "dice" +daduAcak1+ ".png";
var sumberGambar1 = gambarDaduAcak1;
var gambar1 = document.querySelectorAll("img")[0];
gambar1.setAttribute("src", sumberGambar1);

var daduAcak2 = Math.floor(Math.random() * 6) + 1;
var gambarDaduAcak2 = "dice" +daduAcak2 + ".png";
var sumberGambar2 = gambarDaduAcak2;
var gambar2 = document.querySelectorAll("img")[1];
gambar2.setAttribute("src", sumberGambar2);

if (daduAcak1 > daduAcak2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (daduAcak1 < daduAcak2) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}