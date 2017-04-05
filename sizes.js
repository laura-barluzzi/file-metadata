function FileSize() {
  this.size = {};
}

FileSize.prototype.add = function(bytes) {
  this.size["filesize"] = bytes;
}

FileSize.prototype.get = function() {
    return this.size;
}

module.exports = FileSize;