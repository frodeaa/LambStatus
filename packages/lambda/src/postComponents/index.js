
import getComponents from '../utils/dynamoDB'

export async function handler (event, context, callback) {
  console.log('postComponents called')
  return
  try {
    let comps = await getComponents()
    callback(null, JSON.stringify(comps, null, 2))
  } catch (error) {
    console.log('getComponents error', error)
    console.log(error.stack)
    callback(JSON.stringify({
      error: 'Exception occurred'
    }))
  }
}
