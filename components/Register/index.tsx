'use client'

import React, { useState } from 'react'
import styles from './style.module.scss'
import Title from '../title'

const Register: React.FC = () => {
  const [learnerName, setLearnerName] = useState<string>('')
  const [childName, setChildName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [selectedCourse, setSelectedCourse] = useState<string>('')
  const [courseContent, setCourseContent] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [learnerNameError, setLearnerNameError] = useState<boolean>(false)
  const [childNameError, setChildNameError] = useState<boolean>(false)
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false)
  const [selectedCourseError, setSelectedCourseError] = useState<boolean>(false)
  const [courseContentError, setCourseContentError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let hasError = false

    if (learnerName.trim() === '') {
      setLearnerNameError(true)
      hasError = true
    } else {
      setLearnerNameError(false)
    }

    if (selectedCourse === 'On-Demand Kitchen Course' && courseContent.trim() === '') {
      setCourseContentError(true)
      hasError = true
    } else {
      setCourseContentError(false)
    }

    if (childName.trim() === '') {
      setChildNameError(true)
      hasError = true
    } else {
      setChildNameError(false)
    }

    if (phoneNumber.trim() === '' || phoneNumber.length < 10 || phoneNumber.length > 10) {
      setPhoneNumberError(true)
      hasError = true
    } else {
      setPhoneNumberError(false)
    }

    if (selectedCourse.trim() === '') {
      setSelectedCourseError(true)
      hasError = true
    } else {
      setSelectedCourseError(false)
    }
    if (courseContent.trim() === '') {
      setCourseContentError(true)
      hasError = true
    } else {
      setCourseContentError(false)
    }

    if (email.trim() === '') {
      setEmailError(true)
      hasError = true
    } else {
      setEmailError(false)
    }
    if (!hasError) {
      const info = {
        learnerName,
        childName,
        phoneNumber,
        selectedCourse,
        courseContent,
        email,
      }

      alert('Information has been sent successfully')

      console.log('info:', info)

      setLearnerName('')
      setChildName('')
      setPhoneNumber('')
      setSelectedCourse('')
      setCourseContent('')
      setEmail('')
    }
  }

  return (
    <>
      <Title text={' Course Registration'} />
      <div className={styles.container}>
        <h1 className={styles.title}>Register the course</h1>
        <div className={styles.content}>
          <p className={styles.intro}>
            <a href="/" target="black">
              Want to sign up for Rụm
            </a>
            's cooking courses ? Please fill in the correct information in the form below! We will
            contact and advise directly!
          </p>
          <p className={styles.eg}>
            <em>
              If you'd like to take a cooking course with individual dishes, select the Custom
              Kitchen Course and fill in the overview in the Custom Kitchen Course Contents box
              below! (For example: learning hot pot dishes, learning baking dishes, learning to make
              bread fillings...)
            </em>
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <p>
                Learner's first and last name / Parent's first and last name (For Children's Cooking
                course):
              </p>
              <input
                value={learnerName}
                onChange={e => setLearnerName(e.target.value)}
                type="text"
                name=""
              />
              {learnerNameError && <p className={styles.error}>Please enter a valid name.</p>}
            </label>
            <label>
              <p>Child's first and last name (If enrolling for Kids Cooking Course):</p>
              <input value={childName} onChange={e => setChildName(e.target.value)} type="text" />
              {childNameError && <p className={styles.error}>Please enter a valid name.</p>}
            </label>
            <label>
              <p>Phone Number (Please enter it correctly so we can contact you!)</p>
              <input
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                type="number"
                name="phoneNumber"
              />
              {phoneNumberError && <p className={styles.error}>Please enter a valid name.</p>}
            </label>

            <label>
              Select a Course (Select a course here! If you have other needs, you can choose the
              required Kitchen Course and fill out the overview below!)
              <select value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
                <option value="------">------</option>
                <option value="Cooking course for kids">Cooking course for kids</option>
                <option value="Baking and bartending course for kids">
                  CBaking and bartending course for kids
                </option>
                <option value="Opened Hot Pot Course">Opened Hot Pot Course</option>
                <option value="On-Demand Kitchen Course">On-Demand Kitchen Course</option>
                <option value="Bread and pastry making course">
                  Bread and pastry making course
                </option>
              </select>
              {selectedCourseError && <p className={styles.error}>Please enter a valid name.</p>}
            </label>

            <label>
              <p>
                Contents of the On-Demand Kitchen Course (for those who want to learn to cook on
                demand):
              </p>
              <input
                value={courseContent}
                onChange={e => setCourseContent(e.target.value)}
                type="text"
                name="courseContent"
              />
              {courseContentError && <p className={styles.error}>Please enter a valid name.</p>}
            </label>
            <label>
              <p>Email</p>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
              />
              {emailError && <p className={styles.error}>Please enter a valid name.</p>}
            </label>
            <button className={styles.btn} type="submit">
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
