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

  const [courses, setCourses] = useState([])
  const [categories, setCategories] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [bookedCourses, setBookedCourses] = useState([])

  useEffect(() => {
    setCourses(coursesFetch)
  },[coursesFetch])

  useEffect(() => {
    setCategories(categoriesFetch)
  },[categoriesFetch])




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
    .then(course =>
      setCourses([...courses, course])
    )
  }

  const onChangeUser = (user) => {
    setCurrentUser(user)
  }

  const postCourse = (currentUser, course) => {
    console.log("attemping to fetch");
  }

  const filterCourses = () => {
    return currentUser.booked_courses.map(course => {
      return course
    })
  }

  const filterReviews = () => {
    return currentUser.reviews.map(review => {
      return review
    })
  }


  const bookCourse = (course) => {
    if(currentUser === null){
      swal ( "Oops" ,  "You must be a member to book a class!" ,  "error" )
    }else{
      postCourse()
    }
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
              return <CourseCard bookCourse={bookCourse} courses={courseObj}/>
            }}/>

          <Route exact path="/english" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard bookCourse={bookCourse} courses={courseObj}/>
            }}/>

          <Route exact path="/science" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard bookCourse={bookCourse} courses={courseObj}/>
            }}/>

          <Route exact path="/music" render={(props) => {
            let categoryId = props.match.url.slice(1)
            let courseObj = courses.filter(courses => courses.category.name === categoryId)
            return <CourseCard bookCourse={bookCourse}  courses={courseObj}/>
          }}/>

          <Route exact path="/sports" render={(props) => {
            let categoryId = props.match.url.slice(1)
            let courseObj = courses.filter(courses => courses.category.name === categoryId)
            return <CourseCard bookCourse={bookCourse} courses={courseObj}/>
          }}/>

        <Route exact path="/courses" render={(props) => {
            return currentUser === null ? swal("Oops", "You must be logged in first!", "error") :
              <YourCourses filterReviews={filterReviews()} filterCourses={filterCourses()} />

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
        <Footer />
      </Router>
    )
}


export default App;
