


import StudentsFive from '@/components/homes/students/StudentsFive'
import About from '@/components/about/About'
import BecomeInstactor from '@/components/common/BecomeInstactor'
import PageLinks from '@/components/common/PageLinks'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
import LearningJourney from '@/components/common/LearningJourney'
import Preloader from '@/components/common/Preloader'

export const metadata = {
  title: 'About',
  description:
    '',

}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>

            <About/>
            <LearningJourney/>
            <BecomeInstactor/>
             <StudentsFive/>
            <FooterOne/>
        </div>

    </div>
  )
}

