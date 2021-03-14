import test from 'ava'
import browserslist from 'browserslist'
import config from '..'

test('Check list is an array', async t => {

  t.assert(Array.isArray(config), 'List is an array')
  t.pass()

})

test('Browserslist compatability', async t => {

  const list = browserslist(config)

  t.truthy(list, 'List is a valid query')
  t.pass()

})
