console.log("Script running");

const userApiKey = prompt(
  "Please paste your Giphy API key here. The code will not work without this."
);

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
  let myKey = userApiKey;
  let topic = queryField.value;
  let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}+kitten`;
  console.log(myQuery);

  // fetch(...).then(() => {...}).catch(() => {...});
  try {
    const response = await fetch(myQuery);
    const responseJson = await response.json(); // read JSON response

    // code to execute once JSON response is available
    let i = getRandomInt(10);
    let imgurl = responseJson.data[i].images.downsized.url;
    console.log(imgurl);
    imageHolderDiv.innerHTML =
      `<img src="${imgurl}"/>` + imageHolderDiv.innerHTML;
  } catch (error) {
    console.error(error);
  }
});
