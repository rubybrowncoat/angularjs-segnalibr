class BookmarksModel {
  constructor() {
    this.bookmarks = [
      {
        "id": 0,
        "title": "AngularJS",
        "url": "https://angularjs.org",
        "category": "development"
      },
      {
        "id": 1,
        "title": "Node.js",
        "url": "https://nodejs.org",
        "category": "development"
      },
      {
        "id": 2,
        "title": "GitHub",
        "url": "https://github.com",
        "category": "development"
      },
      {
        "id": 3,
        "title": "Material Design",
        "url": "https://material.io/design/",
        "category": "design"
      },
      {
        "id": 4,
        "title": "Dwarf Fortress",
        "url": "http://www.bay12games.com/dwarves/",
        "category": "videogames"
      },
      {
        "id": 5,
        "title": "The Noun Project",
        "url": "https://thenounproject.com",
        "category": "design"
      },
      {
        "id": 6,
        "title": "Rocket League",
        "url": "https://www.rocketleague.com",
        "category": "videogames"
      },
      {
        "id": 7,
        "title": "Honorverse",
        "url": "https://en.wikipedia.org/wiki/Honorverse",
        "category": "scifi"
      }
    ]
  }
}

export default BookmarksModel

// angular.module('segnalibr.models.bookmarks', [
//   // Dependencies
// ])
// .service('BookmarksModel', ['$http', '$q', function(http, que) {
//   let bookmarks = []

//   const endpoints = {
//     fetch: 'data/bookmarks.json',
//   }

//   const getData = response => response.data
//   const gatherBookmarks = response => bookmarks = getData(response)

//   const findBookmarkById = bookmarkId =>
//     bookmarks.find(bookmark => bookmark.id == bookmarkId)

//   this.getBookmarks = () => que.when(bookmarks.length
//     ? bookmarks
//     : http.get(endpoints.fetch).then(gatherBookmarks)
//   )

//   this.getBookmarkById = bookmarkId => {
//     const deferred = que.defer()

//     if (bookmarks.length) {
//       deferred.resolve(findBookmarkById(bookmarkId))
//     } else {
//       this.getBookmarks()
//         .then(() => deferred.resolve(findBookmarkById(bookmarkId)))
//     }

//     return deferred.promise
//   }

//   this.createBookmark = bookmark => {
//     bookmarks.push({
//       ...bookmark,

//       id: bookmarks.length,
//     })
//   }

//   this.editBookmark = editedBookmark => {
//     const index = bookmarks.findIndex(bookmark => bookmark.id === editedBookmark.id)
//     bookmarks.splice(index, 1, editedBookmark)
//   }

//   this.deleteBookmark = deletedBookmark => {
//     if (confirm(`Stai per cancellare un Segnalibr. L'operazione non è reversibile.`)) {
//       const index = bookmarks.findIndex(bookmark => bookmark.id === deletedBookmark.id)
//       bookmarks.splice(index, 1)
//     }
//   }
// }])
