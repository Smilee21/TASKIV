import { signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");
const contact = document.querySelector("#contacto");

logout.addEventListener("click", async() => {
  await signOut(auth);
});

/* contact.addEventListener("click", () => {
  console.log("contact");
}); */
