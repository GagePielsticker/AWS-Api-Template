let {formatResponse} = require('./response')

test('Testing formatResponse 200 code', () => {

    let res = formatResponse({test:1})

    expect(res.statusCode).toBe(200)
})

test('Testing formatResponse 400 code', () => {

    let res = formatResponse(null)

    expect(res.statusCode).toBe(400)
})