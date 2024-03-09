

import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import Grades from '@/components/dashboard/Grades2'
import CourseListTwo from '@/components/courseList/CourseListTwo'
import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title: 'School of Arts & Sciences',
  description:
    '',

}

export default function page() {
  return (
    <div className="main-content">
      <Preloader/>
        <Header/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <Grades/>
            <FooterOne/>
        </div>
    </div>
  )
}
