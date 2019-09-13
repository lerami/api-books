let books = {};
let _ = require('lodash');

books.list = [
    {
 id: 1,
 title: "Harry Potter et la Coupe de feu",
 author: "J. K. Rowling",
 date: "2000-11-29",
 image: "https://images-na.ssl-images-amazon.com/images/I/91huviltGUL.jpg"
    },
    {
 id: 2,
 title: "Vingt mille lieues sous les mers",
 author: "Jules Verne",
 date: "1870-01-01",
 image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg/250px-Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg"
    },
    {
 id: 3,
 title: "Les Aventures d'Alice au pays des merveilles",
 author: "Lewis Carroll",
 date: "1865-07-04",
 image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/AlicesAdventuresInWonderlandTitlePage.jpg/250px-AlicesAdventuresInWonderlandTitlePage.jpg"
    },
    {
 id: 4,
 title: "Le Guide du voyageur galactique",
 author: "Douglas Adams",
 date: "1982-04-01",
 image: "https://static.fnac-static.com/multimedia/Images/FR/NR/40/51/1a/1724736/1540-1/tsp20150929154129/Le-guide-du-voyageur-galactique.jpg"
    },
    {
 id: 5,
 title: "Monsieur Parfait",
 author: "Roger Hargreaves",
 date: "2007-08-16",
 image: "https://hachette-jeunesse.com/sites/default/files/styles/couv_livre/public/images/livres/couv/9782012248373-001-T.jpeg?itok=lbaHL7rC"
    },
 ];

 books.findBooksById = function(id){
    return _.find(books.list, { 'id': id });
 }

 module.exports = books;