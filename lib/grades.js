var gradeBook = {
    _grades: [],    // NOTE use a leading underscore '_' to indicate a private variable

    addGrade: function(newGrade) {
        this._grades.push(newGrade);
    },

    getCountOfGrades: function() {
        return this._grades.length;
    },

    getAverage: function() {
        let sum = 0;
        this._grades.forEach( function (e, i) {
            sum += e;
        });

        return sum / this._grades.length;
    },

    reset: function() {
        this._grades = [];
    }
};

exports.book = gradeBook;
