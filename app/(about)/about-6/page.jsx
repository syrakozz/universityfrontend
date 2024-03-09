



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
                                       Welcome to paris international univeristy  PAU ,
                                    </h2>
                                    <p className="text-dark-1 mt-30">
                                        for more info please contact : info@pau-paris.com
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

