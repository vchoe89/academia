import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import About from './components/About.js'
import Login from './components/Login.js'
import JobForm from './components/JobForm.js'
import { useFetch } from './Hooks/useFetch.js'
import CourseCard from './components/CourseCard.js'
import Image from './images/learn_image.jpeg'
import Footer from './components/Footer.js'

const URL = 'http://localhost:3000/'



function App() {

  let coursesFetch = useFetch(URL+'courses', [])
  let categoriesFetch = useFetch(URL+'categories', [])

  const [courses, setCourses] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCourses(coursesFetch)
  },[coursesFetch])

  useEffect(() => {
    setCategories(categoriesFetch)
  },[categoriesFetch])



    return(
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/main" render={(props) => {
              return <MainContainer categories={categories}/>}}/>

          <Route exact path="/math" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard courses={courseObj}/>
            }}/>

          <Route exact path="/english" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard courses={courseObj}/>
            }}/>

          <Route exact path="/science" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let courseObj = courses.filter(courses => courses.category.name === categoryId)
              return <CourseCard courses={courseObj}/>
            }}/>

          <Route exact path="/music" render={(props) => {
            let categoryId = props.match.url.slice(1)
            let courseObj = courses.filter(courses => courses.category.name === categoryId)
            return <CourseCard courses={courseObj}/>
          }}/>

          <Route exact path="/sports" render={(props) => {
            let categoryId = props.match.url.slice(1)
            let courseObj = courses.filter(courses => courses.category.name === categoryId)
            return <CourseCard courses={courseObj}/>
          }}/>

        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/JobForm"  render={(props) => {
            return <JobForm categories={categories} />
          }}/>
        </Switch>
        <Footer />
      </Router>

    )
}


export default App;
