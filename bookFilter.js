angular.module("bookApp").filter("bookFilter", function () { 
    return function (books, searchText) { 
        if (!searchText) return books; // Return all books if searchText is empty

        searchText = searchText.toLowerCase(); 
        return books.filter(function (book) { 
            return book.title.toLowerCase().includes(searchText) || 
                   book.author.toLowerCase().includes(searchText) || 
                   book.genre.toLowerCase().includes(searchText); 
        }); 
    };
});
