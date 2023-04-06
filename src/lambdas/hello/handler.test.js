let {handler} = require('./handler')

test('Testing hello handler 200 response', () => {

    let result = handler({
        queryStringParameters: {
            test: 1
        }
    })

    expect(result.statusCode).toBe(200)
})