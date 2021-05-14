console.log("Copyright (c) 2021 William Brooks");

var manifestData;
var UDATA;
var DATA;
var settings_modal;
var clock_font = "default";

$.getJSON("manifest.json", function(dat) {
    console.log("Loaded Using Version: " + dat.version);
    manifestData = dat;
});

$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
            $.style(e, "transform", "rotate(" + now + "deg)");
            if (step) return step.apply(e, arguments);
        };

        $({
            deg: 0
        }).animate({
            deg: angle
        }, args);
    });
};

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0
var yyyy = today.getFullYear();

var timeR = true;
setInterval(function() {
    d = new Date();
    var min = d.getMinutes();
    if (
        min == "0" ||
        min == "1" ||
        min == "2" ||
        min == "3" ||
        min == "4" ||
        min == "5" ||
        min == "6" ||
        min == "7" ||
        min == "8" ||
        min == "9"
    ) {
        min = "0" + min;
    }

    var hours = d.getHours();
    var minutes = d.getMinutes();
    var timeValue;
    if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
    } else if (hours == 0) {
        timeValue = "12";
    }
    timeValue +=
        minutes < 10 ?
        '<span id="flickr">:</span>0' + minutes :
        '<span id="flickr">:</span>' + minutes; // get minutes
    timeValue += hours >= 12 ? " <small>P.M.</small>" : " <small>A. M.</small>"; // get AM/PM
    if (Cookies.get("msj-ext_timeFormat") !== undefined) {
        if (Cookies.get("msj-ext_timeFormat") == "12") {
            this.document.getElementById("time").innerHTML = timeValue;
        } else {
            this.document.getElementById("time").innerHTML =
                d.getHours() + '<span id="flickr">:</span>' + min;
        }
    } else {
        this.document.getElementById("time").innerHTML =
            d.getHours() + '<span id="flickr">:</span>' + min;
    }
    document.getElementById("dateTime").innerHTML =
        Math.floor(d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    if (this.timeR) {
        document.getElementById("flickr").style.opacity = "0";
        this.timeR = false;
    } else {
        document.getElementById("flickr").style.opacity = "1";
        this.timeR = true;
    }
}, 1000);

window.onload = async function() {
    $("#gm_link").click(function() {
        window.open("https://www.google.com/gmail/", "_blank");
    });

    $("#pp_link").click(function() {
        window.open("https://www.plusportals.com/MSJHS", "_blank");
    });

    $("#announcementsBtn").click(function() {
        Mousetrap.bind('esc', function() {
            setTimeout(function() {
                document.getElementById("announcementsCodeBackground").style.display = "none";
            }, 750)
            $("#announcementsCodeBackground").animate({
                opacity: "0"
            }, 750)
            $("#announcements").animate({
                    top: Math.floor($(window).height() - 30) + "px",
                    width: "350px",
                    height: "400px"
                    // bottom: "-370px",
                },
                500
            );
            $("#announcementsClose").animate({
                    opacity: "0"
                },
                500
            );
            setTimeout(function() {
                document.getElementById("announcementsBtn").style.cursor = "pointer";
            }, 500);
        })
        document.getElementById("announcementsBtn").className = "purple";
        document.getElementById("announcementsBtn").style.cursor = "default";
        $("#announcements").animate({
                top: "15px",
                width: "80%",
                height: "80%"
            },
            500
        );
        $("#announcementsClose").animate({
                opacity: "0.5"
            },
            500
        );
        document.getElementById("announcementsCodeBackground").style.display = "block";
        $("#announcementsCodeBackground").animate({
            opacity: "1"
        }, 500)
    });
    $("#settingsBtn").click(function() {
        settings_modal.open();
    });
    $(".collapsible").collapsible();
    $("#announcementsCodeBackground").click(function() {

        setTimeout(function() {
            document.getElementById("announcementsCodeBackground").style.display = "none";
        }, 500)
        $("#announcementsCodeBackground").animate({
            opacity: "0"
        }, 500)
        $("#announcements").animate({
                top: Math.floor($(window).height() - 30) + "px",
                width: "350px",
                height: "400px"
                // bottom: "-370px",
            },
            500
        );
        $("#announcementsClose").animate({
                opacity: "0"
            },
            500
        );
        setTimeout(function() {
            document.getElementById("announcementsBtn").style.cursor = "pointer";
        }, 500);
    })
    $("#announcementsClose").click(function() {
        setTimeout(function() {
            document.getElementById("announcementsCodeBackground").style.display = "none";
        }, 500)
        $("#announcementsCodeBackground").animate({
            opacity: "0"
        }, 500)
        $("#announcements").animate({
                top: Math.floor($(window).height() - 30) + "px",
                width: "350px",
                height: "400px"
                // bottom: "-370px",
            },
            500
        );
        $("#announcementsClose").animate({
                opacity: "0"
            },
            500
        );
        setTimeout(function() {
            document.getElementById("announcementsBtn").style.cursor = "pointer";
        }, 500);
    });

    var d = new Date();
    var min = d.getMinutes();
    if (
        min == "0" ||
        min == "1" ||
        min == "2" ||
        min == "3" ||
        min == "4" ||
        min == "5" ||
        min == "6" ||
        min == "7" ||
        min == "8" ||
        min == "9"
    ) {
        min = "0" + min;
    }
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var timeValue;
    if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
    } else if (hours == 0) {
        timeValue = "12";
    }
    timeValue +=
        minutes < 10 ?
        '<span id="flickr">:</span>0' + minutes :
        '<span id="flickr">:</span>' + minutes; // get minutes
    timeValue += hours >= 12 ? " <small>P.M.</small>" : " <small>A.M.</small>"; // get AM/PM
    if (Cookies.get("msj-ext_timeFormat") !== undefined) {
        if (Cookies.get("msj-ext_timeFormat") == "12") {
            this.document.getElementById("time").innerHTML = timeValue;
        } else {
            this.document.getElementById("time").innerHTML =
                d.getHours() + '<span id="flickr">:</span>' + min;
        }
    } else {
        this.document.getElementById("time").innerHTML =
            d.getHours() + '<span id="flickr">:</span>' + min;
    }
    document.getElementById("page").style.opacity = "1";
    document.getElementById("dateTime").innerHTML =
        Math.floor(d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    if (this.timeR) {
        document.getElementById("flickr").style.opacity = "0";
        this.timeR = false;
    } else {
        document.getElementById("flickr").style.opacity = "1";
        this.timeR = true;
    }

// Weather
    // api key : 8df32613a4e7d7ec8999644dfd1273ae

    // SELECT ELEMENTS
    const iconElement = document.querySelector(".weather-icon");
    const tempElement = document.querySelector(".temperature-value p");
    const descElement = document.querySelector(".temperature-description p");
    const locationElement = document.querySelector(".location p");
    const notificationElement = document.querySelector(".notification");

    // App data
    const weather = {};

    weather.temperature = {
        unit: "celsius"
    }

    // APP CONSTS AND VARS
    const KELVIN = 273;
    // API KEY
    const key = "8df32613a4e7d7ec8999644dfd1273ae";

    // CHECK IF BROWSER SUPPORTS GEOLOCATION
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
    }

    // SET USER'S POSITION
    function setPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        getWeather(latitude, longitude);
		getDirections(latitude, longitude);
    }

    // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
    function showError(error) {
        notificationElement.style.display = "block";
        notificationElement.innerHTML = `<p> ${error.message} </p>`;
    }

    // GET WEATHER FROM API PROVIDER
    function getWeather(latitude, longitude) {
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

        fetch(api)
            .then(function(response) {
                let data = response.json();
                return data;
            })
            .then(function(data) {
                weather.temperature.value = Math.floor(data.main.temp - KELVIN);
                weather.description = data.weather[0].description;
                weather.iconId = data.weather[0].icon;
                weather.city = data.name;
                weather.country = data.sys.country;
				weather.fahrenheit = celsiusToFahrenheit(weather.temperature.value);
            })
            .then(function() {
				displayWeather();
            });
    }

    // DISPLAY WEATHER TO UI
    function displayWeather() {
        iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
        tempElement.innerHTML = `${weather.fahrenheit}°<span>F</span>`;
        descElement.innerHTML = weather.description;
        locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    }

    // C to F conversion
    function celsiusToFahrenheit(temperature) {
        weather.temperature.unit = "fahrenheit";
		return (temperature * 9 / 5) + 32;
    }
	
	// F to C conversion
    function fahrenheitToCelsius(temperature) {
        weather.temperature.unit = "celsius";
		return (temperature - 32)* 5/9;
    }

    // WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
    tempElement.addEventListener("click", function() {
        if (weather.temperature.value === undefined) return;

        if (weather.temperature.unit == "fahrenheit") {
            let celsius = fahrenheitToCelsius(weather.fahrenheit);
            celsius = Math.floor(celsius);

            tempElement.innerHTML = `${celsius}°<span>C</span>`;
        } else {
            tempElement.innerHTML = `${weather.fahrenheit}°<span>F</span>`;
            weather.temperature.unit = "fahrenheit"
        }
    });
	
//Directions
	//api key: 5XSoWmhcfFfN26MprSTCPpt0UNamGun7
	
	const timeElement = document.querySelector(".directions-value p");
    const distElement = document.querySelector(".directions-description p");
	const location1Element = document.querySelector(".location1 p");
	
	// API KEY
    const keydir = "5XSoWmhcfFfN26MprSTCPpt0UNamGun7";
	
	// App data
    const direct = {};
	
	function getDirections(latitude, longitude) {
        let apidir =`http://www.mapquestapi.com/directions/v2/route?key=${keydir}&from=${latitude},${longitude}&to=4403+Frederick+Ave,+Baltimore,+MD`;
        fetch(apidir)
            .then(function(response) {
                let datadir = response.json();
				console.log(datadir);
                return datadir;
            })
            .then(function(data) {
				direct.time = data.route.formattedTime;
                direct.dist = data.route.distance;
            })
            .then(function() {
                displayDirections();
            });
    }
	
	function displayDirections() {
        timeElement.innerHTML = `${direct.time}`;
        distElement.innerHTML = `${direct.dist} Miles`;
        location1Element.innerHTML = `From: ${weather.city}, ${weather.country}`;
    }
//HomeworkGC
	// Client ID and API key from the Developer Console
	var CLIENT_ID = '1098054680716-mvmpkljinunmbaha00kklo7o7anfl1t2.apps.googleusercontent.com';
	var API_KEY = 'AIzaSyCO8fXm8HNVEQD4OEd4tMfB43GRpmdMy9Q';
	
	// Array of API discovery doc URLs for APIs used by the quickstart
	var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest"];
	// Authorization scopes required by the API; multiple scopes can be
	// included, separated by spaces.
	var SCOPES = "https://www.googleapis.com/auth/classroom.courses.readonly";
	var authorizeButton = document.getElementById('authorize_button');
	var signoutButton = document.getElementById('signout_button');
	/**
	 *  On load, called to load the auth2 library and API client library.
	 */
	function handleClientLoad() {
		gapi.load('client:auth2', initClient);
	}
	/**
	 *  Initializes the API client library and sets up sign-in state
	 *  listeners.
	 */
	function initClient() {
		gapi.client.init({
			apiKey: API_KEY,
			clientId: CLIENT_ID,
			discoveryDocs: DISCOVERY_DOCS,
			scope: SCOPES
		}).then(function() {
			// Listen for sign-in state changes.
			gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
			// Handle the initial sign-in state.
			updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
			authorizeButton.onclick = handleAuthClick;
			signoutButton.onclick = handleSignoutClick;
		}, function(error) {
			appendPre(JSON.stringify(error, null, 2));
		});
	}
	/**
	 *  Called when the signed in status changes, to update the UI
	 *  appropriately. After a sign-in, the API is called.
	 */
	function updateSigninStatus(isSignedIn) {
		if(isSignedIn) {
			authorizeButton.style.display = 'none';
			signoutButton.style.display = 'block';
			listCourses();
		} else {
			authorizeButton.style.display = 'block';
			signoutButton.style.display = 'none';
		}
	}
	/**
	 *  Sign in the user upon button click.
	 */
	function handleAuthClick(event) {
		gapi.auth2.getAuthInstance().signIn();
	}
	/**
	 *  Sign out the user upon button click.
	 */
	function handleSignoutClick(event) {
		gapi.auth2.getAuthInstance().signOut();
	}
	/**
	 * Append a pre element to the body containing the given message
	 * as its text node. Used to display the results of the API call.
	 *
	 * @param {string} message Text to be placed in pre element.
	 */
	function appendPre(message) {
		var pre = document.getElementById('content');
		var textContent = document.createTextNode(message + '\n');
		pre.appendChild(textContent);
	}
	/**
	 * Print the names of the first 10 courses the user has access to. If
	 * no courses are found an appropriate message is printed.
	 */
	function listCourses() {
		gapi.client.classroom.courses.list({
			pageSize: 10
		}).then(function(response) {
			var courses = response.result.courses;
			appendPre('Courses:');
			if(courses.length > 0) {
				for(i = 0; i < courses.length; i++) {
					var course = courses[i];
					appendPre(course.name)
				}
			} else {
				appendPre('No courses found.');
			}
		});
	}
};

function strip(html) {
    var tmp = document.implementation.createHTMLDocument("New").body;
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

window.addEventListener('resize', function() {
    setTimeout(function() {
        document.getElementById("announcementsCodeBackground").style.display = "none";
    }, 750)
    $("#announcementsCodeBackground").animate({
        opacity: "0"
    }, 750)
    $("#announcements").animate({
            top: Math.floor($(window).height() - 30) + "px",
            width: "350px",
            height: "400px"
            // bottom: "-370px",
        },
        750
    );
    $("#announcementsClose").animate({
            opacity: "0"
        },
        750
    );
    setTimeout(function() {
        document.getElementById("announcementsBtn").style.cursor = "pointer";
    }, 750);
})