// TODO: add code here
window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      const container = document.getElementById("container");

      for (index = 0; index < json.length; index++) {
        container.innerHTML += `
          <div class = "astronant">
          <div class = "info">
            <h3>${json[index].firstName} ${json[index].lastName}</h3>
            <ul>
              <li>Hours in space: ${json[index].hoursInSpace}</li>
              <li>Active: ${json[index].active}</li>
              <li>Skills: ${json[index].skills.join(", ")}</li>
            </ul>
            </div>
            <img class ="selfie" src ="${json[index].picture}">
              </div>
          `;

        //console.log();
      }

      // destination.innerHTML = `
      //       <div>
      //          <h3>Planet ${json[0].name}</h3>
      //          <img src=${json[0].image} height=250></img>
      //       </div>
      //    `;
    });
  });
});
