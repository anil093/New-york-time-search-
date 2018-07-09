var authKey = "293c3fdf82504a109e1a965dc9f11a91";

var  queryTerm = "";
var numResult =0;
var startYear  =0;
var endYear  =0;


var queryurlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" + authKey;


function runQuery(numArticles,newURL){

  
$.ajax({
  url:newURL,
  method: 'GET',
}).done(function(response) {
  console.log(newURL);
  console.log(response);

  for(var i=0; i<response.response.docs.length; i++){
    


    var wellSection = $('<div>');
    //wellSection.addClass(well);
    //well.wellSection.attr('id','articlewell-' + i);
    wellSection.append("<p>"+response.response.docs[i].headline.main+"<p>")
    $(".well").append(wellSection);
    
  //   $("#title").append(response.response.docs[i].headline.main);
  //  // $("#author").html(response.response.docs[i].headline.main);
  //   $("#section").append(response.response.docs[i].section_name);
  //   $("#date").append(response.response.docs[i].pub_date);
  }
   
}).fail(function(err) {
  throw err;
});
}


$("#searchbtn").on("click", function(){

  queryTerm = $("#Search").val().trim();

  var newURL= queryurlBase + "&q=" + queryTerm;
 

  numResult = $("#numRecords").val();
  
  startYear = $("#Startyear").val().trim() + "0101";
 
  endYear = $("#EndYear").val().trim() + "0101";
 

 

// if(parseInt(startYear)){
      
//       newURL = newURL + "&begin_date=" + "0101";
//     }

//   if(parseInt(endYear)){
     
//       newURL = newURL + "&end_date=" + "0101";
//     } 

    newURL = newURL + "&begin_date=" +  startYear + "&end_date=" +  endYear;

    console.log(newURL)

   runQuery(numResult, newURL);
   return false;


})