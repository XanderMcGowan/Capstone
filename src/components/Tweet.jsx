import PropTypes from 'prop-types'
import Avatar from './Avatar'
import moment from "moment"
import './Tweet.css'

function Tweet(props) {
  const { user, country, children } = props

  return (
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
          <span className="tweet-user">@{user}</span>·
          <span className="tweet-created-on">
            {country}
          </span>
        </div>
        <div className="tweet-content">{children}</div>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  user: PropTypes.string,
  createdOn: PropTypes.string,
}

export default Tweet