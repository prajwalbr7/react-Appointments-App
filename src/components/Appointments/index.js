// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuid4} from 'uuid'
import {format} from 'date-fns'
import AppointmentList from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', arrayList: [], isStarred: false}

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickButtonAction = event => {
    event.preventDefault()
    const {title, date} = this.state
    const rightFormat = date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : ''
    const AddListItem = {
      id: uuid4(),
      titles: title,
      dates: rightFormat,
      Starred: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, AddListItem],
      title: '',
      date: '',
    }))
  }

  toggleOfStarred = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, Starred: !eachItem.Starred}
        }
        return eachItem
      }),
    }))
  }

  SortStartList = () => {
    const {isStarred} = this.state
    if (isStarred) {
      this.setState({isStarred: false})
    } else {
      this.setState({isStarred: true})
    }
  }

  render() {
    const {title, date, isStarred} = this.state
    let {arrayList} = this.state
    if (isStarred) {
      const newList = arrayList.filter(eachItem => eachItem.Starred === true)
      arrayList = newList
    }

    return (
      <div className="container1">
        <div className="container2">
          <h1 className="heading">Add Appointment</h1>
          <div className="container3">
            <form className="form-style" onSubmit={this.onClickButtonAction}>
              <label className="label-style" htmlFor="userInput">
                TITLE
              </label>

              <input
                id="userInput"
                className="input-style"
                placeholder="Title"
                type="input"
                onChange={this.onChangeInput}
                value={title}
              />

              <label className="label-style margin-Item" htmlFor="date">
                DATE
              </label>

              <input
                id="date"
                className="input-style"
                type="date"
                onChange={this.onChangeDate}
                value={date}
              />
              <div className="margin-Item">
                <button className="button-style" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="img-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img-style"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="cont-heading-button">
            <h1 className="heading2">Appointments</h1>
            {isStarred && (
              <button
                className="Starred-button"
                type="button"
                onClick={this.SortStartList}
              >
                Starred
              </button>
            )}
            {!isStarred && (
              <button
                className="Starred-button"
                type="button"
                onClick={this.SortStartList}
              >
                Starred
              </button>
            )}
          </div>
          <ul className="ul-style">
            {arrayList.map(eachItem => (
              <AppointmentList
                arrayList={eachItem}
                toggleOfStarred={this.toggleOfStarred}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
