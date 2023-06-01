function search() {
  let { value } = document.getElementById("searchInput");
  const baseUrl = "https://google.com/search?q="
  if(!value) value = "https://github.com/CyberCarboon2"
  location.replace(baseUrl + value)
}