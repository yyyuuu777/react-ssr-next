import React from 'react'

export default class extends React.Component {
	// getInitialProps will only exec on server, but when route change this method will exec in browser
	// Note: not use getInitialProps on component just in pages
	// Note: the path name will be passed by {}
  static async getInitialProps({ req, pathname }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
	  // fetch data by await retun obj, you can get the value by this.props.xx in browser
    return { userAgent, pathname }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
		Get the context is {this.props.pathname}
      </div>
    )
  }
}
