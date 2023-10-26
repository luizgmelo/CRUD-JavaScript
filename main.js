const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");
const post = document.querySelector("#post")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can't be blank";
    console.log("failure");
  } else {
    console.log("sucess");
    post.innerHTML += `
    <div>
      <p>${input.value}</p>
      <span onClick="editPost(this)" class="material-icons">edit</span>
      <span onClick="deletePost(this)" class="material-icons">delete</span>
    </div>  
    `; 
  }
  input.value = "";
};

const editPost = (self) => {
  input.value = self.parentElement.firstElementChild.textContent;
  deletePost(self);
};

const deletePost = (self) => {
  self.parentElement.remove();
}
