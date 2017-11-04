// // All JS goes here
// var gridSites = [
//     // {"title":"name of website",
//     // "url":"url",
//     // "screenshot":"thumbnail view",
//     // "favicon":"display next to title"}
//     {
//         "title": "Github",
//         "url": "https://github.com/razzlepdx",
//         "screenshot":"",
//         "favicon":"static/images/beautifulicon.ico"
//     }
// ]

// var gridSize = gridSites.length;
// var grid = document.getElementbyId("grid");

// function resizeGrid(gridSize) {
//     //when new tab opens, count number of gridSites
//     //use  determine size and shape of grid

// }
// function setSquares(gridSites) {
//     for (var i = 0; i < gridSites.length; i++) {
//         var square = grid.appendChild(document.createElement("div"))
//         square
//     }
// }
//grid is made up of squares
//when new tab opens, count number of gridSites
    //number of gridSites will determine size and shape of grid

//for each gridSite, make a new square
//each square will have:
    //a <p> tag that is a link to that square's url contains:
        //a span for the favicon of that square
        //a span for the title of that square
    //under the <p> tag will be a small image with the same width as the <p> tag
        //the image will display that square's thumbnail


// TODO: write test to see if changes made to gridSites, and if not, show most recent grid


function buildPopupDom(mostVisitedURLs) {
  var popupDiv = document.getElementById('list');
  var ol = popupDiv.appendChild(document.createElement('ol'));

  for (var i = 0; i < mostVisitedURLs.length; i++) {
    var li = ol.appendChild(document.createElement('li'));
    var a = li.appendChild(document.createElement('a'));
    a.href = mostVisitedURLs[i].url;
    a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
  }
}

chrome.topSites.get(buildPopupDom);