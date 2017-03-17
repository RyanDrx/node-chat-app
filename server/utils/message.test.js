var expect = require('expect');

var { generateMessage } = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var generatedMessage = generateMessage('TEST', 'Message');
        expect(generatedMessage.text).toBe('Message');
        expect(generatedMessage.from).toBe('TEST');
        expect(generatedMessage.createdAt).toBeA('number');
    })
});