'use strict';

describe('pigLatinFilter', function() {
    beforeEach(module('pigLatin'));

    describe('pigLatin', function() {
        
        it('should handle a null string', function() {
            inject(function(pigLatinFilter) {
                expect(pigLatinFilter(null)).toBe('');
            });
        });

        it('should correctly translate words starting with a consonant', function() {
            inject(function(pigLatinFilter) {
                expect(pigLatinFilter('test')).toBe('esttay');
                expect(pigLatinFilter('break')).toBe('eakbray');
                expect(pigLatinFilter('code')).toBe('odecay');
                expect(pigLatinFilter('clothes')).toBe('othesclay');
            });
        });

        it('should correctly translate words starting with a vowel', function() {
            inject(function(pigLatinFilter) {
                expect(pigLatinFilter('angular')).toBe('angularway');
                expect(pigLatinFilter('eye')).toBe('eyeway');
                expect(pigLatinFilter('integer')).toBe('integerway');
                expect(pigLatinFilter('I')).toBe('Iway');
            });
        });

        it('should handle sentences and punctuation', function() {
            inject(function(pigLatinFilter) {
                expect(pigLatinFilter('I like angular.')).toBe('Iway ikelay angularway.');
                expect(pigLatinFilter('The car is black.')).toBe('eThay arcay isway ackblay.');
                expect(pigLatinFilter('I\'ll be there.')).toBe('Iway\'llay ebay erethay.');
                // expect(pigLatinFilter('Hello, my name is Derek.')).toBe('elloHay, ymay amenay isway erekDay.');
            });
        });

    });

});