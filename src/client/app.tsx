import {Component, h} from 'preact'
import {lazy, Suspense} from 'preact/compat'
import Router from 'preact-router'

const SomeRoute = lazy(() =>  import('./someRoute'))

export default class App extends Component {
  render(props,state) {
    return (
      <Router>
        <Suspense fallback={<h1>loading...</h1>}>
          <SomeRoute message='Hello world'/>
        </Suspense>
      </Router>
    )
  }
}