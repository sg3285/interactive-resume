var bio = {
  "name": "Sherry Sandt",
  "role": "Area Manager",
  "contacts" : {
      "mobile": "222-333-4444",
      "email": "ssemail@gmail.com",
      "github": "sherryvette",
      "twitter": "@sherryvette",
      "location": "Gainesville, GA",
    },
      "welcomeMessage": "I love learning!",
      "skills": [ "HTML", "JavaScript", "C++"],
      "bioPic": "images/me.png",
      display : function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        // not sure why the spacing is off between contact info and contact category
        for (contact in bio.contacts) {
          var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
          formattedContact = formattedContact.replace("%contact%", contact);
          $("#topContacts").append(formattedContact);
          }

          var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
          $("#header").append(formattedPic);

          var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
          $("#header").append(formattedDescription);

          if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
          }

          // needs styling, currently flows outside of header on mobile resolution
          for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
           }

          for (contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
            formattedContact = formattedContact.replace("%contact%", contact);
            $("#footerContacts").append(formattedContact);
          }

        }
      };

var work = {
  "jobs": [
  {
    "employer": "AT&T",
    "title": "Area Manager",
    "location": "Conyers, GA",
    "dates": "August 2012 - Present",
    "description": "Responsible for maintenance of the Mobility Core network."
  }, {
    "employer": "AT&T",
    "title": "Technical Manager",
    "location": "Atlanta, GA",
    "dates": "January 1999 - August 2012",
    "description": "Responsible for maintenance of the TDM Legacy T network."
  }
  ],

  display : function() {
    for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
 }
 };

var education = {
  "schools": [
    {
    "location": "Macon, GA",
    "name": "Mercer University",
    "degree": "Computer Science",
    "majors": ["Computer Science, Minor - Psycology"],
    "dates": "1994-1999",
    "url": "Mercer.com"
   }
   ], 
  "onlineCourses":[
   {
    "title": "Front End Web Developer",
    "school": "Udacity",
    "dates": "March 2015 to Present",
    "url": "http://udacity.com"
    }, 
    {
    "title": "Design of Computer Programs",
    "school": "Udacity",
    "dates": "December 2014 - December 2014",
    "url": "https://www.udacity.com/course/cs212"
    }
    ],
   display : function() {
    for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
    var formattedSchoolHeader = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolHeader);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    // TODO: style better
    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  
  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedOnlineHeader  = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedOnlineHeader);
    
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    // TODO: style better
    var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
   }
  }
  };

var projects = {
  "projects" :[{
    "title": "Portfolio",
    "description": "This was my first project with Udacity and contains my portfolio page.",
    "dates": "2015",  
    "images": "images/mock-up.png"  
   
  }, {
    "title": "Resume",
    "description": "This was my second project with Udacity and contains my Resume.",
    "dates": "2015",    
    "images": "images/resume.png"
  }],   
  
  display :function() {
    for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

   // if (projects.projects[project].images.length > 0) {
   //   for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
      }
  }  
 };



bio.display();
work.display();
education.display();
projects.display();


function inName(_name) {
  var name;
  if (_name) {
    name = _name;
  } else {
    name = bio.name;
  }
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}
$("#mapDiv").append(googleMap);
$('#main').append(internationalizeButton);

