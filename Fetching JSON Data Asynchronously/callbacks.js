//simulating fetching using the callback function of the sample dataset.
function fetchDataWithCallback(callback) {
  setTimeout(() => {
      const data = {
          "fear": "quiet",
          "chest": -1477429467,
          "how": false,
          "graph": false,
          "camp": 929234312,
          "plural": "settle"
      };
      callback(null, data);
  }, 1000); // Simulating the delay of calling
}

// Usage of the callback function 
fetchDataWithCallback((error, data) => {
  if (error) {
      console.error("Error fetching data:", error);
  } else {
      console.log("Data fetched using Callbacks:", data);
  }
});
