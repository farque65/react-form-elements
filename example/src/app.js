import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import GithubCorner from 'react-github-corner'
import Routes from './routes'
import ErrorBoundry from './utils/boundry'
const App = () => <Routes />
export default () => {
  return (
    <Fragment>
      <ErrorBoundry>
        <nav>
          <Link to="react-form-elements/">Home</Link>
          <span>Examples</span>
          <Link to="react-form-elements/contact" className="sublink">
            Contact Form
          </Link>
          <Link to="react-form-elements/inputs" className="sublink">
            Text Inputs
          </Link>
          <Link to="react-form-elements/attributes" className="sublink">
            Element Attributes
          </Link>
          <Link to="react-form-elements/selectors" className="sublink">
            Selectors
          </Link>
          <Link to="react-form-elements/others" className="sublink">
            Other Elements
          </Link>
          <Link to="react-form-elements/styling" className="sublink">
            Styling
          </Link>
          <Link to="react-form-elements/hook" className="sublink">
            Hook
          </Link>
        </nav>
        <React.Suspense fallback={<div>Loading</div>}>
          <App />
        </React.Suspense>
        <GithubCorner
          href="https://www.github.com/Kevnz/react-form-elements"
          bannerColor="#151513"
          octoColor="#fff"
          size={80}
          direction="right"
        />
      </ErrorBoundry>
    </Fragment>
  )
}