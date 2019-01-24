//Announcements class
class Announcement {
    constructor(heading, date, details) {
        this.heading = heading
        this.date = date
        this.details = details
    }
}

//Array of announcement instances
var Announcements = [
    new Announcement("Build Hours", "Mon - Fri 2pm - 8pm / Sat 11am - 4pm", "Build team please come to robotics club on these days."),
    new Announcement("Bag Day", "February 19, 2019", "The day construction on the robot must stop and be in a bag."),
    new Announcement("Bellville Competition", "March 7 - 9, 2019", "Robotics competition at Bellville high school" ),
    new Announcement("Marysville Competition", "March 28 - 30, 2019", "Robotics competition at Marysville high school"),
    new Announcement("State Competition", "April 10 - 13, 2019", "Robotics competition at Saginaw Valley"),
    new Announcement("World Competition", "April 24 - 27, 2019", "Robotics competition at Cobo Hall")
];

//Buffer with all announcement
var announcements_buffer = "<div class='row'><br>";

//Format announcements divs
for (i = 0; i < Announcements.length; i++) {
    announcements_buffer += "<div class='col'><div class='card'><h4>" + Announcements[i].heading + "</h4><h6>" + Announcements[i].date + "</h6>" + Announcements[i].details + "</div></div>"
}
announcements_buffer += "</div>"
document.getElementById("display_announcements").innerHTML = announcements_buffer;