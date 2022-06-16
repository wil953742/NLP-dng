const myObj = {}

class CommonError extends Error {
  constructor(error) {
    super(`custom - ${error.message}`)
    
    if(!error.stack){
      Error.captureStackTrace(myObj)
    } else {
      this.stack = error.stack
    }
  }
}

const c = () => {
  throw new Error('test error')
}

const b = () => {
  console.log('b')
  
  c()
}

const a = () => {
  console.log('a')
  try {
    b()
  } catch(e) {
    throw new CommonError(e)
  }
}

a()

// console.log(myObj.stack)