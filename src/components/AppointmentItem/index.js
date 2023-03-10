// Write your code here
import './index.css'

const AppointmentList = props => {
  const {arrayList, toggleOfStarred} = props
  const {titles, dates, id, Starred} = arrayList

  const imgUrl = Starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const toggleStarred = () => {
    toggleOfStarred(id)
  }

  return (
    <li className="list-container margin-to-left">
      <div className="container-sub-list">
        <p className="heading-list">{titles}</p>
        <button
          data-testid="star"
          className="button-list"
          type="button"
          onClick={toggleStarred}
        >
          <img src={imgUrl} className="img-list" alt="star" />
        </button>
      </div>
      <p className="para-list">Date: {dates}</p>
    </li>
  )
}

export default AppointmentList
