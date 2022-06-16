console.log('hi')

class ErrorBuilder extends Error {

  constructor(error) {
    console.log(error)
  }

  common(error) {
    this.error = error
  }

  code(code) {
    this.statusCode = code
  }

  contents(contents) {
    this.contents = contents
  }
}

ErrorBuilder.common(new Error('test error'))