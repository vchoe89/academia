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
  const [currentUser, setCurrentUser] = useState(null)

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
      // console.log([...courses, newCourseObj])
      setCourses([...courses, newCourseObj])
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
          return currentUser === null ? <Redirect to="/Login"/> :
            <JobForm handleCourse={handleCourse} categories={categories} />
          }}/>
        </Switch>
      </Router>
    )
}


export default App;
