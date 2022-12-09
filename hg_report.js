"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Hesbon Osoro
   Date: 12/10/22 
   
   Filename: hg_report.js
	
*/

/* Game Report */

var gameReport =
  "<h1>" +
  itemTitle +
  "</h1><h2>By: " +
  itemManufacturer +
  "</h2><img src='hg_" +
  itemID +
  ".png' alt='" +
  itemID +
  "' id='gameImg' /><table><tr><th>Product ID</th><td>" +
  itemID +
  "</td></tr><tr><th>List Price</th><td>" +
  itemPrice +
  "</td></tr><tr><th>Platform</th><td>" +
  itemPlatform +
  "</td></tr><tr><th>ESRB Rating</th><td>" +
  itemESRB +
  "</td></tr><tr><th>Condition</th><td>" +
  itemCondition +
  "</td></tr><tr><th>Release</th><td>" +
  itemRelease +
  "</td></tr></table>" +
  itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

/* Ratings */

var ratingsSum = 0;
var ratingsCount = ratings.length;
for (var i = 0; i < ratings.length; i++) {
  ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport =
  "<h1>Customer Reviews</h1><h2>" +
  ratingsAvg +
  " out of 5 stars (" +
  ratingsCount +
  " reviews)</h2>";

//making the reviews and star ratings
for (var i = 0; i <= 2; i++) {
  ratingReport += "<div class='review'>";
  ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
  ratingReport +=
    "<table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
  ratingReport +=
    "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
  ratingReport += "<tr><th>Rating</th><td>";
  for (var j = 0; j < ratings[i]; j++) {
    ratingReport += "<img src='hg_star.png'/>";
  }
  ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
