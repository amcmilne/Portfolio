var GITHUBAuthToken = 'c1f148a9bb80a242cdbda897b3b8a14a11eaa3d0';

function getGITHubRepo(repoName) {
    var z = fetch("https://api.github.com/users/" + repoName + "/repos" +"?&access_token="+GITHUBAuthToken)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
  return z; 
}

function getGITHubRepoDeployment(deploymentURL) {
    var z = fetch(deploymentURL  +"?&access_token="+GITHUBAuthToken)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
  return z; 

}
//postRequest("https://api.github.com/users/", { user: "amcmilne" })
  //.then((data) => console.log(data)) // Result from the `response.json()` call
  //.catch((error) => console.error(error));

function postRequest(url, data) {
  return fetch(url, {
    credentials: "same-origin", // 'include', default: 'omit'
    method: "POST", // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }).then((response) => response.json());
}
