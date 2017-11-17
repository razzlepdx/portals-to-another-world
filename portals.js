
var gridSites = [
//TODO: add favicon, picture and (eventually) last visited date to objects in this list
    // {"title":"name of website",
    // "url":"url",
    // "screenshot":"thumbnail view",
    // "favicon":"display next to title"}
]

var gridSize = 18;
var grid = document.getElementById("grid");

// Populates grid with items from gridSites - title and link to URL only 

function setSquares(gridSites) {
    grid.classList.add("grid");
    for (var i = 0; i < gridSize; i++) {
        var square = grid.appendChild(document.createElement("div"));
        square.classList.add("square");
        if ((i+1) % 3 === 1) {
            square.classList.add("left");
        }
        if ((i+1) % 3 === 2) {
            square.classList.add("middle");
        }
        var siteName = square.appendChild(document.createElement("p"));
        siteName.innerHTML = "<a href=\"" + gridSites[i].url + "\">" + gridSites[i].title + "</a>";
        
    }
}

// TODO: write test to see if changes made to gridSites, and if not, show most recent grid

// pushes topSites to gridSites list
function buildPopupDom(mostVisitedURLs) {

  for (var i = 0; i < gridSize; i++) {
    gridSites.push(mostVisitedURLs[i]);

    // var li = ol.appendChild(document.createElement('li'));
    // var a = li.appendChild(document.createElement('a'));
    // a.href = mostVisitedURLs[i].url;
    // a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
  }
  return setSquares(gridSites);
}

// loads page topSites
//TODO : figure out persistence to load user-selected sites
 if (gridSites.length === 0) {
    chrome.topSites.get(buildPopupDom);
 } else {
    setSquares(gridSites);
}

// function resizeGrid(gridSize) {
//     //when new tab opens, count number of gridSites
//     //use  determine size and shape of grid
// }