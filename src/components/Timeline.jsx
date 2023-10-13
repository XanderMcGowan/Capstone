import PropTypes from 'prop-types'
import Tweet from './Tweet.jsx'
import './Timeline.css'

function Timeline({ tweets }) {
  return (
    <ul className="timeline">
      {tweets.map(({ id, user, country, content }) => (
        <li key={id} className="timeline-item">
          <Tweet user={user} country={country}>
            {content}
          </Tweet>
        </li>
      ))}
    </ul>
  )
}

Timeline.propTypes = {
  tweets: PropTypes.array,
}

export default Timeline