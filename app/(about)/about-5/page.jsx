



import StudentsFive from '@/components/homes/students/StudentsFive'
import About from '@/components/about/About'
import BecomeInstactor from '@/components/common/BecomeInstactor'

import Brands from '@/components/common/Brands'
import PageLinks from '@/components/common/PageLinks'
import StepsOne from '@/components/common/StepsOne'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
import Testimonials from '../../../components/common/Testimonials'
import LearningJourney from '@/components/common/LearningJourney'
import LearningPathSix from '@/components/common/LearningPathSix'
import Preloader from '@/components/common/Preloader'
import Image from "next/image";

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

                <>
                    <section className="page-header -type-1">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-auto">



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-md layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-50 justify-between items-center">

                                <div className="col-lg-12">
                                    <h2 className="text-30 lh-16">
                                        Open Letter for Dean: Charnaud A. Emil
                                    </h2>
                                    <p className="text-dark-1 mt-30">
                                        Welcome to the University of Paris! Whether you are a new or continuing student you are an important part of our campus community.<br/>
                                        I am privileged to serve as your Dean of Students and focus my leadership on creating a healthy, safe and inclusive campus where you can maximize your personal potential while pursuing your educational dreams.
                                        Something for Everyone<br/>
                                        The Paris International University is an amazing institution with so much to offer. Take time to explore and embrace the rich opportunities presented to you. From performances, lectures, and campus events and athletic competitions, there is something here for everyone!
                                        Expect Respect!<br/>
                                        Stand up for what you believe in, consider and learn from the diverse perspectives of others, and redirect or report uncivil and other inappropriate behavior.
                                        Give back to your community – volunteer!<br/>
                                        Share your time and talents with others on campus and around the globe.<br/>
                                        Best wishes for an extraordinary Paris Experience, and GO BLUE!<br/>
                                        Dean: Charnaud A. Emil
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                <FooterOne/>
            </div>

        </div>
    )
}

