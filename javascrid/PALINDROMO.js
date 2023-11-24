
const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");


button.addEventListener("click", () => {

  const text = inputText.value.trim();
  if (text.length == 0) {
    alert("Input cannot be empty");
    return; 
  }
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const isPalindrome = cleanText === cleanText.split("").reverse("").join("");
  const message = isPalindrome
    ? `<span></span>si es palindrome!`
    : `<span></span>No es palindrome!`;
  result.innerHTML = message;
  result.classList.remove("error", "success");
  setTimeout(() => {
    result.classList.add(isPalindrome ? "success" : "error");
  }, 10);
});