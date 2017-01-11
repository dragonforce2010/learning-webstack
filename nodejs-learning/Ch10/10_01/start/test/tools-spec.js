var expect = require('chai').expect
var tool = require('../lib/tools')

describe('printName()', function() {
    it("should print the last name first", function() {
        var result = tools.printName({first: 'Alex', last: 'Smith'})
        expect(result).to.equal('Banks, Alex')
    })
})