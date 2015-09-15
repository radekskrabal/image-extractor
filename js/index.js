const DIR = 'img';
const IMG_HEIGHT = 125;
const EXTENSIONS = [ 'jpg' ];

let extractImages = function() {
    loadData()
        .then(findImages)
        .then(processImages)
        .then(renderImages);
};

let loadData = function() {
    return $.get(DIR);
};

let findImages = function(data) {
    let elements = [];

    $(EXTENSIONS).each(function(index, ext) {
        let match = $(data).find('a:contains(.' + ext + ')').toArray();
        elements = elements.concat(match);
    });

    let paths = elements.map(function(el) {
        return el.href;
    });

    return paths;
};

let processImages = function(images) {
    // TODO: Read EXIF data

    return images;
};

let renderImages = function(paths) {
    let gallery = $('#gallery');
    $(paths).each(function(index, path) {
        var img = $('<img />', {
            src: path,
            height: IMG_HEIGHT
        });
        img.appendTo(gallery);
    });
};

$(document).ready(function() {
    extractImages();
});