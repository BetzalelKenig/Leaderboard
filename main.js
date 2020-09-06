//import { v4 as uuidv4 } from './node_modules/uuid';

let con = document.getElementById("container");
let users = [];
class User {
  name;
  score = 0;
  id = 0;

  constructor(name) {
    this.name = name;

    let user = document.createElement("div");
    user.classList.add("user");

    let username = document.createElement("span");
    username.classList.add("username");
    username.innerText = this.name + ": ";

    let userscore = document.createElement("span");
    userscore.classList.add("userscore");
    userscore.innerText = this.score;

    let vote = document.createElement("span");
    vote.classList.add("vote");

    let like = document.createElement("i");
    like.classList.add("fa");
    like.classList.add("fa-thumbs-up");
    like.classList.add("like");
    like.addEventListener("click", () => {
      this.score++;
      userscore.innerText = this.score;
      init();
    });

    let unlike = document.createElement("i");
    unlike.classList.add("fa");
    unlike.classList.add("fa-thumbs-down");
    unlike.classList.add("unlike");
    unlike.addEventListener("click", () => {
      this.score--;
      userscore.innerText = this.score;
      init();
    });

    let sep = document.createElement("span");
    sep.innerText = " | ";

    user.appendChild(username);
    user.appendChild(userscore);
    user.appendChild(vote);
    vote.appendChild(like);
    vote.appendChild(sep);
    vote.appendChild(unlike);
    users.push(user);

    //     con.innerHTML += `
    // <div class='user'>
    //     <span class='username'>${this.name}:  </span>
    //     <span id='${this.id}' class='userscore'>${this.score}</span>
    //     <span class='vote'>
    //         <i onclick="upvote(x = ${this.id})" class="fa fa-thumbs-up like"></i> |
    //         <i onclick="downvote(x = ${this.id})" class="fa fa-thumbs-down unlike"></i>
    //     </span>
    //     <span></span>
    // </div>`;
    //this.id++;
  }

  //   upvote(x) {
  //     document.getElementById(x).value = "fdhg";
  //   }

  //   downvote(x) {
  //     users[users.indexOf(x)].score--;
  //   }
}
new User("Adam");
new User("Ben");
new User("Avi");
new User("Joe");
new User("Kenji");
new User("Matuso");
new User("Mike");
new User("Pich");

const init = () => {
  for (let u of users.sort((a, b) => parseInt(b.children[1].innerText) - parseInt(a.children[1].innerText))) {
    con.appendChild(u);
  }
};

init();

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
