import React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Tweet from './Tweet.jsx'
import './Timeline.css'

const Timeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/feed")
      .then((res) => res.json())
      
      .then((data) => setData(data));
  }, []);


  console.log(data)


  return (
    <ul className="timeline">
      {data.map(({ id, user, country, content }) => (
        <li key={id} className="timeline-item">
          <Tweet user={user} country={country}>
            {content}
          </Tweet>
        </li>
      ))}
    </ul>
  )
}

// Timeline.propTypes = {
//   tweets: PropTypes.array,
// }

export default Timeline