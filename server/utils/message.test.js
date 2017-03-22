var expect = require('expect');

var { generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var generatedMessage = generateMessage('TEST', 'Message');
        expect(generatedMessage.text).toBe('Message');
        expect(generatedMessage.from).toBe('TEST');
        expect(generatedMessage.createdAt).toBeA('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {

        var from = 'dev';
        var latitude = 15;
        var longitude = 14;
        var url = 'https://www.google.com/maps?q=15,14';

        var generatedLocationMessage = generateLocationMessage(from, latitude, longitude);
        expect(generatedLocationMessage.createdAt).toBeA('number');
        expect(generatedLocationMessage.from).toBe('dev');
        expect(generatedLocationMessage.url).toBe(url);
    })
});