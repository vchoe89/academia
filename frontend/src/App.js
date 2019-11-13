import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import About from './components/About.js'
import Login from './components/Login.js'
import JobForm from './components/JobForm.js'
import YourCourses from './components/YourCourses.js'
import { useFetch } from './Hooks/useFetch.js'
import CourseCard from './components/CourseCard.js'
import Image from './images/learn_image.jpeg'
import Footer from './components/Footer.js'
import swal from 'sweetalert';



const URL = 'http://localhost:3000/'



function App() {

  let coursesFetch = useFetch(URL+'courses', [])
  let categoriesFetch = useFetch(URL+'categories', [])
  let reviewsFetch = useFetch(URL+'reviews', [])

  const [courses, setCourses] = useState([])
  const [categories, setCategories] = useState([])
  const [currentUser, setCurrentUser] = useState({
    id: 186,
name: "Neoma Zulauf",
address: "21089 Stracke Heights",
birthday: "1976-04-15",
email: "arnoldo@example.com",
phone_number: "1-594-545-1956",
profile_image: null,
education: "North Turner Institute",
skills: null,
travel_distance: null,
bio: null,
booked_courses: [
{
id: 210,
name: "Private Tennis Lessons",
hourly_rate: 30,
location: "Reston, VA",
created_at: "2019-11-11T14:28:05.446Z",
updated_at: "2019-11-11T14:28:05.446Z",
category_id: 115,
instructor_id: 193,
own_review: {
id: 7,
course_id: 210,
content: null,
rating: null,
created_at: "2019-11-12T19:06:16.291Z",
updated_at: "2019-11-12T19:06:16.291Z",
customer_id: 186
}
},
{
id: 205,
name: "Private Cello Lessons",
hourly_rate: 20,
location: "Silver Spring, MD",
created_at: "2019-11-11T14:28:05.423Z",
updated_at: "2019-11-11T14:28:05.423Z",
category_id: 114,
instructor_id: 190,
own_review: {
id: 8,
course_id: 205,
content: null,
rating: null,
created_at: "2019-11-12T19:11:54.713Z",
updated_at: "2019-11-12T19:11:54.713Z",
customer_id: 186
}
},
{
id: 203,
name: "Basic Science",
hourly_rate: 30,
location: "Wheaton, MD",
created_at: "2019-11-11T14:28:05.412Z",
updated_at: "2019-11-11T14:28:05.412Z",
category_id: 113,
instructor_id: 189,
own_review: {
id: 9,
course_id: 203,
content: null,
rating: null,
created_at: "2019-11-12T19:13:04.812Z",
updated_at: "2019-11-12T19:13:04.812Z",
customer_id: 186
}
},
{
id: 205,
name: "Private Cello Lessons",
hourly_rate: 20,
location: "Silver Spring, MD",
created_at: "2019-11-11T14:28:05.423Z",
updated_at: "2019-11-11T14:28:05.423Z",
category_id: 114,
instructor_id: 190,
own_review: {
id: 8,
course_id: 205,
content: null,
rating: null,
created_at: "2019-11-12T19:11:54.713Z",
updated_at: "2019-11-12T19:11:54.713Z",
customer_id: 186
}
},
{
id: 208,
name: "Private Soccer Lessons",
hourly_rate: 30,
location: "Washington, DC",
created_at: "2019-11-11T14:28:05.436Z",
updated_at: "2019-11-11T14:28:05.436Z",
category_id: 115,
instructor_id: 193,
own_review: {
id: 16,
course_id: 208,
content: null,
rating: null,
created_at: "2019-11-12T20:24:22.215Z",
updated_at: "2019-11-12T20:24:22.215Z",
customer_id: 186
}
},
{
id: 200,
name: "Advanced Writing",
hourly_rate: 35,
location: "Aspen Hill, MD",
created_at: "2019-11-11T14:28:05.398Z",
updated_at: "2019-11-11T14:28:05.398Z",
category_id: 112,
instructor_id: 188,
own_review: {
id: 17,
course_id: 200,
content: null,
rating: null,
created_at: "2019-11-12T20:25:08.731Z",
updated_at: "2019-11-12T20:25:08.731Z",
customer_id: 186
}
},
{
id: 206,
name: "Private Piano Lessons",
hourly_rate: 30,
location: "North Bethesda, MD",
created_at: "2019-11-11T14:28:05.427Z",
updated_at: "2019-11-11T14:28:05.427Z",
category_id: 114,
instructor_id: 191,
own_review: {
id: 18,
course_id: 206,
content: null,
rating: null,
created_at: "2019-11-12T20:32:25.462Z",
updated_at: "2019-11-12T20:32:25.462Z",
customer_id: 186
}
},
{
id: 210,
name: "Private Tennis Lessons",
hourly_rate: 30,
location: "Reston, VA",
created_at: "2019-11-11T14:28:05.446Z",
updated_at: "2019-11-11T14:28:05.446Z",
category_id: 115,
instructor_id: 193,
own_review: {
id: 7,
course_id: 210,
content: null,
rating: null,
created_at: "2019-11-12T19:06:16.291Z",
updated_at: "2019-11-12T19:06:16.291Z",
customer_id: 186
}
},
{
id: 205,
name: "Private Cello Lessons",
hourly_rate: 20,
location: "Silver Spring, MD",
created_at: "2019-11-11T14:28:05.423Z",
updated_at: "2019-11-11T14:28:05.423Z",
category_id: 114,
instructor_id: 190,
own_review: {
id: 8,
course_id: 205,
content: null,
rating: null,
created_at: "2019-11-12T19:11:54.713Z",
updated_at: "2019-11-12T19:11:54.713Z",
customer_id: 186
}
},
{
id: 208,
name: "Private Soccer Lessons",
hourly_rate: 30,
location: "Washington, DC",
created_at: "2019-11-11T14:28:05.436Z",
updated_at: "2019-11-11T14:28:05.436Z",
category_id: 115,
instructor_id: 193,
own_review: {
id: 16,
course_id: 208,
content: null,
rating: null,
created_at: "2019-11-12T20:24:22.215Z",
updated_at: "2019-11-12T20:24:22.215Z",
customer_id: 186
}
}
]
})
  const [bookedCourses, setBookedCourses] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])
  const [button, setButton] = useState(false)

  useEffect(() => {
    setCourses(coursesFetch)
  },[coursesFetch])

  useEffect(() => {
    setCategories(categoriesFetch)
  },[categoriesFetch])

  useEffect(() => {
    setReviews(reviewsFetch)
  },[reviewsFetch])







  const handleCourse = (course) => {
    course.instructor_id = currentUser.id
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course)
    }
    fetch(URL+'courses', configObj)
    .then(r => r.json())
    .then(newCourseObj =>
      setCourses(
        console.log(newCourseObj)

        // [...courses, {...newCourseObj, instructor: {...currentUser}}]
      )
    )
  }

  const onChangeUser = (user) => {
    setCurrentUser(user)
  }

  const bookCourse = (course, currentUser) => {
    if(currentUser === null){
      swal("Oops!", "You must be logged in to book a course!", "error")
    }else{
      let courseObj = {course_id: course.id, customer_id: currentUser.id}
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseObj)
      }
      fetch(URL+'reviews', configObj)
      .then(r => r.json())
      .then(bookedCourseObj =>
        setCurrentUser(
          {...currentUser, booked_courses: [...currentUser.booked_courses, bookedCourseObj]}
        )
      )
    }
  }

  const bookedCourse = (course) => {
    if(currentUser === null){
      swal ( "Oops" ,  "You must be a member to book a class!" ,  "error" )
    }else{
      bookCourse(course)
    }
  }

  const currentUsersCourses = () => {
    return currentUser.booked_courses.map(course => {
      return course
    })
  }

    return(
      <Router>
        <Navbar currentUser={currentUser}/>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/main" render={(props) => {
              return <MainContainer currentUser={currentUser} categories={categories}/>}}/>

          <Route exact path="/math" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard button={button} currentUser={currentUser} bookCourse={bookCourse} courses={courseObj}/>
            }}/>

          <Route exact path="/english" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard currentUser={currentUser} bookCourse={bookCourse} courses={courseObj}/>
            }}/>

          <Route exact path="/science" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard currentUser={currentUser} bookCourse={bookCourse} courses={courseObj}/>
            }}/>

          <Route exact path="/music" render={(props) => {
            let categoryId = props.match.url.slice(1)
            let courseObj = courses.filter(courses => courses.category.name === categoryId)
            return <CourseCard currentUser={currentUser} bookCourse={bookCourse}  courses={courseObj}/>
          }}/>

          <Route exact path="/sports" render={(props) => {
            let categoryId = props.match.url.slice(1)
            let courseObj = courses.filter(courses => courses.category.name === categoryId)
            return <CourseCard currentUser={currentUser} bookCourse={bookCourse} courses={courseObj}/>
          }}/>

        <Route exact path="/courses" render={(props) => {
            if(currentUser === null){
              swal("Oops", "You must be logged in to view your courses!", "error")
            }else{
              let bookedCourses = currentUser.booked_courses.map(course => {
                return course
              })
              return currentUser === null ? swal("Oops", "You must be logged in first!", "error") :
                <YourCourses bookedCourses={bookedCourses} />
            }
          }} />

        <Route exact path="/login" render={()=> {

            return currentUser === null ? <Login currentUser={currentUser} onChangeUser={onChangeUser}/> :
            <Redirect to='main' />
          }}/>

        <Route exact path="/about" component={About} />
        <Route exact path="/JobForm"  render={(props) => {
            return <JobForm handleCourse={handleCourse} categories={categories} />
          }}/>
        </Switch>
      </Router>
    )
}


export default App;
