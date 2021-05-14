// Global Vars
var notifCounter;
var counter = 0;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

// Global Functions
// test
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}
function sendNotif(title, msg) {
  try {
    // chrome.notifications.create("spalding_ext-" + counter, {
    //   title: title,
    //   type: "basic",
    //   message: msg,
    //   iconUrl: "logo.png"
    // });
    // notifCounter = notifCounter + 1;
  } catch (e) {
    console.error(e.stack)
  }

}
chrome.notifications.onClicked.addListener(function (Nid) {
  chrome.notifications.clear(Nid);
});
!(function (e) {
  var n = !1;
  if (
    ("function" == typeof define && define.amd && (define(e), (n = !0)),
      "object" == typeof exports && ((module.exports = e()), (n = !0)),
      !n)
  ) {
    var o = window.Cookies,
      t = (window.Cookies = e());
    t.noConflict = function () {
      return (window.Cookies = o), t;
    };
  }
})(function () {
  function g() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var o = arguments[e];
      for (var t in o) n[t] = o[t];
    }
    return n;
  }
  return (function e(l) {
    function C(e, n, o) {
      var t;
      if ("undefined" != typeof document) {
        if (1 < arguments.length) {
          if (
            "number" == typeof (o = g({ path: "/" }, C.defaults, o)).expires
          ) {
            var r = new Date();
            r.setMilliseconds(r.getMilliseconds() + 864e5 * o.expires),
              (o.expires = r);
          }
          o.expires = o.expires ? o.expires.toUTCString() : "";
          try {
            (t = JSON.stringify(n)), /^[\{\[]/.test(t) && (n = t);
          } catch (e) { }
          (n = l.write
            ? l.write(n, e)
            : encodeURIComponent(String(n)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
            (e = (e = (e = encodeURIComponent(String(e))).replace(
              /%(23|24|26|2B|5E|60|7C)/g,
              decodeURIComponent
            )).replace(/[\(\)]/g, escape));
          var i = "";
          for (var c in o)
            o[c] && ((i += "; " + c), !0 !== o[c] && (i += "=" + o[c]));
          return (document.cookie = e + "=" + n + i);
        }
        e || (t = {});
        for (
          var a = document.cookie ? document.cookie.split("; ") : [],
          s = /(%[0-9A-Z]{2})+/g,
          f = 0;
          f < a.length;
          f++
        ) {
          var p = a[f].split("="),
            d = p.slice(1).join("=");
          this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
          try {
            var u = p[0].replace(s, decodeURIComponent);
            if (
              ((d = l.read
                ? l.read(d, u)
                : l(d, u) || d.replace(s, decodeURIComponent)),
                this.json)
            )
              try {
                d = JSON.parse(d);
              } catch (e) { }
            if (e === u) {
              t = d;
              break;
            }
            e || (t[u] = d);
          } catch (e) { }
        }
        return t;
      }
    }
    return (
      ((C.set = C).get = function (e) {
        return C.call(C, e);
      }),
      (C.getJSON = function () {
        return C.apply({ json: !0 }, [].slice.call(arguments));
      }),
      (C.defaults = {}),
      (C.remove = function (e, n) {
        C(e, "", g(n, { expires: -1 }));
      }),
      (C.withConverter = e),
      C
    );
  })(function () { });
});

// Code
try {
  setInterval(function () {
    if (Cookies.get("spalding-ext_email") !== undefined) {
      httpGetAsync(
        `http://brycecary.design/spalding-ext/api/index.php/announcements/${yyyy}/${mm}/${dd}/${Cookies.get("spalding-ext_email")}`,
        function (e) {
          if (e !== null) {
            e = e.split(",");
            e.forEach(an => {
              sendNotif(an, "a")
            });            
          }          
        }
      );
    }
    console.log("Checking for notifications")
    console.clear();
  }, 5000);
  console.log("started")
} catch (e) {
  console.error(e.stack);
  chrome.notifications.create("spalding_ext-err", {
    title: "Error",
    type: "basic",
    message:
      "The Spalding Extension hit a roadblock, in otherwords, an error ocurred",
    iconUrl: "logo.png"
  });
}
