const {
  checkServerStatus,
  fetchAllCats,
  fetchCatPics,
  fetchBannerContent,
} = require("./cat-server");

console.log("Call fetchAllCats()");
console.log("Starting request...");

fetchAllCats((err, cats) => {
  if (err) {
    console.log("fetchAllCats ❌ Failed:", err);
  } else {
    console.log("fetchAllCats ✅ Success:", cats);
  }
});

console.log("Call checkServerStatus()");
console.log("Starting request...");

checkServerStatus((err, status) => {
  if (err) {
    console.log("checkServerStatus ❌ Failed:", err);
  } else {
    console.log("checkServerStatus ✅ Success:", status);
  }
});

console.log("Call fetchCatPics()");
console.log("Starting request...");

fetchCatPics(
  ["cute-cat", "chonky-cat", "scratchy-cat", "pathetic-cat", "Tot"],
  (err, status) => {
    if (err) {
      console.log("fetchCatPics ❌ Failed:", err);
    } else {
      console.log("fetchCatPics ✅ Success:", status);
    }
  }
);

console.log("fetchBannerContent()");
console.log("Starting request...");

fetchBannerContent((err, banner) => {
  if (err) {
    console.log("fetchBannerContent ❌ Failed:", err);
  } else {
    console.log("fetchBannerContent ✅ Success:", banner);
  }
});
