$(document).ready(function() {
    let books = [];

    function isDuplicate(title, author) {
        return books.some(book => book.title === title && book.author === author);
    }

    function addBook(book) {
        let table = $("#bookTable tbody");

        if (!isDuplicate(book.title, book.author)) {
            table.append(`
                <tr id="${book.id}">
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.genre}</td>
                    <td>${book.year}</td>
                    <td>${book.quantity}</td>
                    <td>
                        <button class="btn btn-primary btn-sm edit-btn" data-toggle="modal" data-target="#editmodal" data-id="${book.id}">Edit</button>
                        <button class="btn btn-danger btn-sm delete-btn" data-id="${book.id}">Delete</button>
                    </td>
                </tr>
            `);
        } else {
            alert("This book already exists in the Saad'Ullah Library");
        }
    }

    function clearForm() {
        $("#bookForm input").val("");
    }

    function generateId() {
        return Math.floor(Math.random() * 1000000);
    }

    $("#addbtn").click(function() {
        let bookTitle = $("#booktitle").val();
        let author = $("#author").val();
        let genre = $("#genre").val();
        let year = $("#year").val();
        let quantity = $("#quantity").val();

        if (bookTitle && author && genre && year && quantity) {
            let book = {
                id: generateId(),
                title: bookTitle,
                author: author,
                genre: genre,
                year: year,
                quantity: quantity,
                hello:quantity,
            };

            addBook(book);
            books.push(book);
            clearForm();
        }
    }); 
});