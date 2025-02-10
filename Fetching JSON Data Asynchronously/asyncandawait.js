//fetching the model using Async and await
async function fetchDataWithAsyncAwait() {
  try {
      const data = await new Promise((resolve) => {
          setTimeout(() => {
              resolve({
                  "fear": "quiet",
                  "chest": -1477429467,
                  "how": false,
                  "graph": false,
                  "camp": 929234312,
                  "plural": "settle"
              });
          }, 1000); // Simulating the delay of the API
      });

      console.log("Data fetched using Async/Await:", data);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Usage of the function
fetchDataWithAsyncAwait();
