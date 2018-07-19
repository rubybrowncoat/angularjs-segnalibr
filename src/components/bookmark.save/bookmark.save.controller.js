class BookmarkSaveController {
  $onChanges() {
    this.editedBookmark = {
      ...this.bookmark,
    }
  }

  isCreating() {
    return this.editedBookmark.new
  }

  isEditing() {
    return !this.editedBookmark.new
  }
}

export default BookmarkSaveController;
