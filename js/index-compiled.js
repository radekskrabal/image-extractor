'use strict';

var DIR = 'img';
var IMG_HEIGHT = 125;
var EXTENSIONS = ['jpg'];

var extractImages = function extractImages() {
    loadData().then(findImages).then(processImages).then(renderImages);
};

var loadData = function loadData() {
    return $.get(DIR);
};

var findImages = function findImages(data) {
    var elements = [];

    $(EXTENSIONS).each(function (index, ext) {
        var match = $(data).find('a:contains(.' + ext + ')').toArray();
        elements = elements.concat(match);
    });

    var paths = elements.map(function (el) {
        return el.href;
    });

    return paths;
};

var processImages = function processImages(images) {
    // TODO: Read EXIF data

    return images;
};

var renderImages = function renderImages(paths) {
    var gallery = $('#gallery');
    $(paths).each(function (index, path) {
        var img = $('<img />', {
            src: path,
            height: IMG_HEIGHT
        });
        img.appendTo(gallery);
    });
};

$(document).ready(function () {
    extractImages();
});

//# sourceMappingURL=index-compiled.js.map