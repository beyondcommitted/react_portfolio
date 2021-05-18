import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import Skills from '../Components/Skills'

export default function AboutPage() {
    return (
        <div className='AboutPage'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <Skills skill={'JavaScript'} progress={'60%'}/>
        </div>
    )
}
