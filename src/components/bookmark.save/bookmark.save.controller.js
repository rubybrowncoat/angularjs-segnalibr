class BookmarkSaveController {
  $onChanges() {
    this.editedBookmark = {
      ...this.bookmark,
    }
  }

  isCreating() {
    return !this.editedBookmark.id
  }

  isEditing() {
    return !!this.editedBookmark.id
  }
}

export default BookmarkSaveController;
