"use strict";
window.onload = function () {
  //Выведите массив в HTML с помощью функции render(), которая перебирает массив и отображает каждую книгу на странице. Вы можете отобразить их в таблице или на карточках.
  //Добавьте кнопку "НОВАЯ КНИГА". При нажатии на данную кнопку открывается форма ввода информации о новой книге: автор, название, количество страниц, прочитана ли она
  //Добавьте кнопку удаления на карточку каждой книги - нужно будет связать ваши элементы DOM с реальными объектами книги (установка data-атрибута, который соответствует индексу массива библиотеки)
  //Добавьте кнопку изменения статуса чтения книги (свойство read) на карточку каждой книги.
  //localStorage (документы здесь) позволяет сохранять данные на компьютере пользователя. - its for future to improove project, Firebase (гляньте сюды!) - это онлайн база данных, которая сохраняет данные на сервере в облаке

  let myLibrary = new Array();
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
  } //add some styles
  document.querySelector("#render").onclick = function render() {
    //this is not done yet
    let pos = prompt("position", "b1");
    let book = +prompt("which book?", 1) - 1;
    let check = JSON.parse(localStorage.myLibrary);
    if (check[book] == undefined) {
      return alert("The wrong position please try again");
    }
    return (
      (document.querySelector("#" + pos).innerHTML =
        String(Object.values(check[0]).toString()).replace(/,/g, "<br>") + //this piece of code returns info about book and render it on site
        "<br> Book: " + (book + 1) + '<br> <button id="change_read">Change read</button>'),
      (document.querySelector("#change_read").onclick = function changeRead() {
        //function of changing status of read
        let new_read = prompt("Whats value of read now?", "Yes");
        return (
          (localStorage.myLibrary = JSON.stringify(
            (check[book].read = "Read: " + new_read)
          )),
          render()
        );
      })
    );
  };

  document.querySelector("#newBook").onclick = function addBookToLibrary() {
    //this works now
    let leng = JSON.parse(localStorage.myLibrary).length;
    console.log(JSON.parse(localStorage.myLibrary).length);
    myLibrary_arr = JSON.parse(localStorage.myLibrary);
    myLibrary_arr[leng] =
      new Book(
        prompt("title"),
        prompt("author"),
        prompt("pages"),
        prompt("read")
      )
    ;
    console.log(myLibrary_arr[0].info())//test
    return (localStorage.myLibrary = JSON.stringify(myLibrary_arr)); //bug, JSON.parse(localStorage.myLibrary).info() is not a function
  };

  document.querySelector("#deleteBook").onclick = function deleteBook() {
    //this is not done yet
    let position = +prompt("Which book do you want to delete?", 1) - 1;
    let pos = prompt("Which position you want to delete?");
    return (
      (document.querySelector("#" + pos).innerHTML = "<h3>" + pos + "</h3>"),
      myLibrary.splice(position, 1)
    );
  };
  // TESTS
};
