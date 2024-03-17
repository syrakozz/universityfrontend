



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
import BackButton from "@/core/BackButton";

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
                        <div>
                            <BackButton/>
                        </div>
                        <div className="container">
                            <div className="row y-gap-50 justify-between ">

                                <div className="col-lg-6">
                                    <div>
                                        <img
                                            width="100%"
                                            height={400}
                                            src="/assets/img/home-2/students/1.jpeg"
                                            alt="image"
                                        />

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="text-30 lh-16">
                                        Open Letter for Chairman,Board of trustees
                                    </h2>
                                    <p className="text-dark-1 mt-30">
                                        Taking our <b>PIU</b> from the faculty Student Success Committee, the Board has, over the past two years, approved a number of new approaches designed to streamline the experience of every student – including year-long scheduling, hiring additional faculty, more aggressive advising and mentoring and a more effective degree audit approach.
                                        The conversion of the University curriculum is an important additional contributor to student success.<br/>
                                        The existing system disadvantages <b>PIU</b> students, and we believe the three-credit-hour model will be to students' advantage.<br/><br/><br/> It does not change the overall amount of class time or work needed.<br/> Students will graduate in the same amount of time as under the old system – or sooner – and they will pay less because the new system will eliminate the need to take unnecessary credits toward graduation. Significantly, this new system will not apply to current students and therefore has no impact to them or their progress toward graduation. The University is bound by a state mandate that allows students to complete the curriculum that was published in the catalogue when they registered.
                                        In parallel with the Student Success Committee, the Board began considering the desirability of converting to the new model nearly two years ago.<br/> In the intervening period we carefully considered input from representatives of the Faculty Senate, the University Curriculum Committee and other universities that have made similar conversions. Based on that analysis, the Board unanimously passed the March 18 resolution to convert the University in a careful, considered manner that will hold students harmless.<br/>
                                        Over the past several days I have conferred with each member of the Board concerning this important issue.<br/> I can report to you that:

                                        <ul style={{listStyle:"unset",margin:10,padding:10}}>
                                            <li style={{listStyle: "disc"}}>The Board remains unanimous in its support of the move to a three-credit-hour model under the semester system.
                                            </li>
                                            <li style={{listStyle: "disc"}}>
                                                The Board has full confidence that President Berkman and his administration will move forward with flexibility and common sense per the express language of the resolution. The President and the Provost will collaborate with deans, department chairs, the Faculty Senate, the faculty more broadly and students in a considerate and deliberate manner to ensure the change occurs reasonably and smoothly.
                                                Moreover, the Board has full confidence in President Berkman and his stewardship of the <b>University</b>.<br/> The contrary view reflected in the Faculty Senate vote is perplexing, because all around us is clear evidence, and cause for celebration, of the substantial progress of <b>PIU</b> during President Berkman's tenure. Examples include:

                                            </li>

                                            <li style={{listStyle: "disc"}}>
                                                The Board has full confidence that President Berkman and his administration will move forward with flexibility and common sense per the express language of the resolution. The President and the Provost will collaborate with deans, department chairs, the Faculty Senate, the faculty more broadly and students in a considerate and deliberate manner to ensure the change occurs reasonably and smoothly.
                                                Moreover, the Board has full confidence in President Berkman and his stewardship of the University. The contrary view reflected in the Faculty Senate vote is perplexing, because all around us is clear evidence, and cause for celebration, of the substantial progress of <b>PIU</b> during President Berkman's tenure. Examples include:

                                            </li>

                                            <li style={{listStyle: "disc"}}>
                                                A balanced budget every year, even in times of fiscal stringency
                                            </li>

                                            <li style={{listStyle: "disc"}}>
                                                Consistently robust enrollment growth
                                            </li>
                                            <li style={{listStyle: "disc"}}>
                                                New dorms and the new North Campus to meet the demands of our growing residential population
                                            </li>

                                            <li style={{listStyle: "disc"}}>
                                                Unprecedented levels of fund-raising
                                            </li>
                                            <li style={{listStyle: "disc"}}>
                                                A dramatic increase in sponsored research
                                            </li>

                                            <li style={{listStyle: "disc"}}>
                                                In short, Cleveland State University is progressing on all fronts. In recognition of these achievements and the potential for more, the Board in January extended the President's contract through 2016.
                                                Of course, we still have work to do, especially to ensure student success in the most expeditious and efficient way possible. Speaking for my Board colleagues, I can assure you that the success of our students remains our number-one priority for the University. We believe that conversion to the three-credit-hour paradigm is the right course for the right reasons at the right time. We intend to move this University forward, and we respectfully request your support and your assistance as we do so.
                                            </li>
                                        </ul>
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

