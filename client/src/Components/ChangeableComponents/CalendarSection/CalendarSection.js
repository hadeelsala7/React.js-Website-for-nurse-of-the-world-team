import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

 
class CalendarSection extends Component {

  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="calander-container" id="section4">
        <div className="Calendar">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        <div className="tittle">
         
          <h1 className="last-h1">
              تعرف على مواعيد أنشطتنا بدقة  
          </h1>
          <h1 className="second-h1">
            <mark>
            ...إذاََ
            </mark>
            </h1>
        

          <h1 className="first-h1">
              لا تريد أن تفوت نشاط معنا؟
          </h1>


        </div>
      </div>
    );
  }
}
export default CalendarSection;