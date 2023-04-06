/* Coldstart dependency loading */
const { formatResponse } = require('../../utils/response')

/* Invoke handler */
exports.handler = (event, context, callback) => {
  const params = event?.queryStringParameters

  console.log(`Lambda Invoked with params:\n${params ? JSON.stringify(params, null, 4) : 'NONE'}`)

  const data = {
    bye: ':('
  }

  return callback(null, formatResponse(data))
}
