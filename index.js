let check = document.getElementsByTagName("input")[0];

check.addEventListener("click", () => {
  let change = document.querySelectorAll(".card");
  if (!check.checked) {
    change[0].getElementsByTagName("h1")[0].innerHTML = "&dollar;199.99";
    change[1].getElementsByTagName("h1")[0].innerHTML = "&dollar;249.99";
    change[2].getElementsByTagName("h1")[0].innerHTML = "&dollar;399.99";
  } else {
    change[0].getElementsByTagName("h1")[0].innerHTML = "&dollar;19.99";
    change[1].getElementsByTagName("h1")[0].innerHTML = "&dollar;24.99";
    change[2].getElementsByTagName("h1")[0].innerHTML = "&dollar;39.99";
  }
});
