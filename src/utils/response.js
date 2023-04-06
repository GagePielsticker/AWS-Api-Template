
function formatResponse (data) {
  let statusCode

  if (!data || typeof data !== 'object') {
    data = 'Invalid Server Response.'
    statusCode = 400
  } else statusCode = 200

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        region: process.env.AWS_REGION,
        data
      }
    )
  }
}

module.exports = {
  formatResponse
}
