// from data.js
var tableData = data;

//select the submit button for the form
var submit = d3.select("#filter-btn");

//filter function - Date

submit.on("click", function() {

    // Prevent refresh
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue)

    //select the table    
    var ufoTable = d3.select("#ufo-table>tbody");
    
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData)

    filteredData.forEach((sighting) => {
    
      //Add a new row
      var row = ufoTable.append("tr");
      row.append("td").text(sighting.datetime); 
      row.append("td").text(sighting.city); 
      row.append("td").text(sighting.state);      
      row.append("td").text(sighting.country);
      row.append("td").text(sighting.shape);
      row.append("td").text(sighting.durationMinutes);
      row.append("td").text(sighting.comments);      

    });
  });