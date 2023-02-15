var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: "Images/everyday.jpg",
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img: "Images/human.jpg",
    }
    ];
for(var i = 0; i < books.length; i++){
    var container = document.createElement("ul");
    var book = document.createElement("li")
    var bookt = document.createElement("p");
    var booka = document.createElement("p")
    var bookimg = document.createElement("img")
    bookimg.src = books[i].img;
    bookimg.style.width = "300px"
    bookimg.style.height = "300px"
    bookt.textContent = "Title: " + books[i].title 
    booka.textContent = "By: " + books[i].author 
    book.append(bookt, booka, bookimg)
    container.append(book)
    document.body.appendChild(container)
    console.log(container)
    if(books[i].alreadyRead){
        book.style.color = "green"
    }else{
        book.style.color = "red"
    }
}
