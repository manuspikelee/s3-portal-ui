export default class ActionNavbarController {
  /** @ngInject */
  constructor($scope, $bucket, $nav, $file, $upload, $layout) {
    Object.assign(this, {
      $bucket, $file, $upload, $layout,
    });

    $scope.$watch(
      () => $nav.type,
      newVal => (this.type = newVal)
    );

    $scope.$watch(
      () => $layout.state,
      newVal => Object.assign(this, newVal)
    );

    $scope.$watch(
      () => $bucket.state.delete.name,
      newVal => this.disableDeleteButton = ! newVal && ! this.isFile()
    );
  }

  /**
   * Returns the type is FILE or not.
   *
   * @return {Boolean}
   */
  isFile() {
    return this.type === 'FILE';
  }

  open() {
    //
  }

  download() {
    //
  }

  delete() {
    if (this.isFile()) {
      // handle delete file
    } else {
      this.$bucket.deleteDialog();
    }
  }

  closeSidePanels() {
    this.$layout.closeSidePanels();
  }

  openProperties() {
    this.$layout.openProperties();
  }

  openTransfers() {
    this.$layout.openTransfers();
  }

  /**
   * Display the create dialog by `this.type`
   *
   * @param  {Object} $event
   * @return {Void}
   */
  create($event) {
    if (this.isFile()) {
      this.$upload.createDialog($event);
    } else {
      this.$bucket.createDialog($event);
    }
  }

  createFolder($event) {
    // handle the create folder event
  }

  /**
   * Refresh the list by `this.type`
   *
   * @return {Void}
   */
  refresh() {
    if (this.isFile()) {
      this.$file.getFiles();
    } else {
      this.$bucket.getBuckets();
    }
  }
}
