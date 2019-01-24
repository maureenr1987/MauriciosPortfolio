//Array of sponsor logos

class sponsor {
    constructor(logo, website) {
        this.logo = logo
        this.website = website
    }
}

var Sponsors = [
    new sponsor ("src/logos/Dadara_logo.png", "" ),
    new sponsor ("src/logos/FIRSTinMichigan.png", "http://www.firstinmichigan.org/" ),
    new sponsor ("src/logos/WWCSD_logo.png", "https://www.wwcsd.net/"),
    new sponsor ("src/logos/GMS_logo.png", "https://www.facebook.com/powerstrokeprinting/"),
    new sponsor ("src/logos/Powerstroke_logo.png", "https://www.facebook.com/powerstrokeprinting/"),
    new sponsor ("src/logos/Icon_logo.png", "https://www.iconpcsolutions.com/"),
    new sponsor ("src/logos/WayneRotary_logo.png", "https://portal.clubrunner.ca/652"),
    new sponsor ("src/logos/Pakman_logo.png", "https://pakmanluxury.com/"),
    new sponsor ("src/logos/Faro_logo.png", "http://www.faroscreen.com/"),
    new sponsor ("src/logos/Derm_logo.png", "https://www.hamzaviderm.com/")
];

var SponsorBuffer = "";

for (i = 0; i < Sponsors.length; i++) {

    if (i % 2 == 0) {
        if (Sponsors[i].website == "") {
            SponsorBuffer += "<div class='row' id='group'><div class='col'><div class='card' id='sponsor'><img src='" + Sponsors[i].logo + "'alt='link'></div></div>";
        }
        else {
            SponsorBuffer += "<div class='row' id='group'><div class='col'><div class='card' id='sponsorl'><a target='_blank' href='" + Sponsors[i].website + "'><img src='" + Sponsors[i].logo + "'alt='link'></a></div></div>";
        }
    } 
    else if ( Sponsors[i].length % 2 == 1 && i == Sponsors.length -1) {
        if (Sponsors[i].website == "") {
            SponsorBuffer += "<div class='col'><div class='card' id='sponsor'><img src='" + Sponsors[i].logo + "'alt='link'></div></div>";
        }
        else {
            SponsorBuffer += "<div class='col'><div class='card' id='sponsorl'><a target='_blank' href='" + Sponsors[i].website + "'><img src='" + Sponsors[i].logo + "'alt='link'></a></div></div>";
        }
    }
    else {
        if (Sponsors[i].website == "") {
            SponsorBuffer += "<div class='col'><div class='card' id='sponsor'><img src='" + Sponsors[i].logo + "'alt='link'></div></div></div>";
        }
        else {
            SponsorBuffer += "<div class='col'><div class='card' id='sponsorl'><a target='_blank' href='" + Sponsors[i].website + "'><img src='" + Sponsors[i].logo + "'alt='link'></a></div></div></div>";
        }
    }
}

document.getElementById("SponsorGrid").innerHTML = SponsorBuffer;