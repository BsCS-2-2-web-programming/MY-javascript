//function of fetching using promises
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const data = {
              "fear": "quiet",
              "chest": -1477429467,
              "how": false,
              "graph": false,
              "camp": 929234312,
              "plural": "settle"
          };
          resolve(data);
      }, 1000); // Simulating the delay of the function delay
  });
}

// Usage of the function of Promises
fetchDataWithPromise()
  .then((data) => {
      console.log("Data fetched using Promises:", data);
  })
  .catch((error) => {
      console.error("Error fetching data:", error);
  });
