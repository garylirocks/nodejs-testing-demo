var book = require("../lib/grades").book;

// NOTE for nodeunit, 'setUp' is called before any test
exports["setUp"] = function(callback) {
    book.reset();
    callback();
};

// NOTE export the test as a function, and the 'test' object will be passed as a parameter to it
exports["Can add new grade"] = function(test) {
    book.addGrade(90);
    var count = book.getCountOfGrades();

    // NOTE other test methods: .notEqual, .ok
    test.equal(count, 1);

    // NOTE indicate the test is done now
    test.done();
};

exports["Can average grades"] = function(test) {
    book.addGrade(100);
    book.addGrade(50);

    var average = book.getAverage();
    test.equal(average, 75);
    test.done();
}
