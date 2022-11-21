"use strict";
window.onload = function () {
  let myLibrary = [];
  myLibrary = JSON.parse(localStorage.myLibrary);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  let myLibrary_arr = JSON.parse(localStorage.myLibrary);

  class Book {
    constructor(title, author, pages, read) {
      this.title = "Title: " + title + " ";
      this.author = "Author: " + author + " ";
      this.pages = "Pages: " + pages + " ";
      this.read = "Read: " + read + " .";
    }
    info() {
      return String(
        this.title + ", " + this.author + ", " + this.pages + ", " + this.read
      );
    }
  }
  document.querySelector("#render").onclick = function render() {
    let pos = prompt("position", "b1");
    let book = +prompt("which book?", 1) - 1;
    let check = JSON.parse(localStorage.myLibrary);
    if (check[book] == undefined) {
      return alert("The wrong position please try again");
    }
    return (
      (document.querySelector("#" + pos).innerHTML =
        String(Object.values(check[book]).toString()).replace(/,/g, "<br>") + //this piece of code returns info about book and render it on site
        "<br> Book: " +
        (book + 1) +
        '<br> <button id="change_read">Change read</button>'),
      (document.querySelector("#change_read").onclick = function changeRead() {
        //function of changing status of read
        let new_read = prompt("Whats value of read now?", "Yes");
        return (
          (check[book].read = "Read: " + new_read),
          (localStorage.myLibrary = JSON.stringify(check)),
          render()
        );
      })
    );
  };

  document.querySelector("#newBook").onclick = function addBookToLibrary() {
    let leng = JSON.parse(localStorage.getItem("myLibrary")).length;
    console.log(JSON.parse(localStorage.getItem("myLibrary")).length);
    myLibrary_arr = JSON.parse(localStorage.getItem("myLibrary"));
    myLibrary_arr[leng] = new Book(
      prompt("title"),
      prompt("author"),
      prompt("pages"),
      prompt("read")
    );
    return localStorage.setItem("myLibrary", JSON.stringify(myLibrary_arr));
  };

  document.querySelector("#deleteBook").onclick = function deleteBook() {
    let position = +prompt("Which book do you want to delete?", 1) - 1;
    let pos = prompt("Which position you want to delete?", 'b1');
    if(pos != ('b1' || 'b2' || 'b3')){
      return alert('wrong position please try again')
    }
    let newLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    newLibrary.splice(position, 1);
    return (
      (document.querySelector("#" + pos).innerHTML = "<h3>" + pos + "</h3>"),
      localStorage.setItem("myLibrary", JSON.stringify(newLibrary))
    );
  };
};
