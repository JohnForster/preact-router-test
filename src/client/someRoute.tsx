import {Component, h} from 'preact'

interface SomeRouteProps {
  message?: string
}

export default class SomeRoute extends Component <SomeRouteProps> {
  render(props, state) {
    return (
      <div>{props.message || 'no prop passed'}</div>
    )
  }
}