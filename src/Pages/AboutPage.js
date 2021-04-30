import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Pages/ImageSection'

export default function AboutPage() {
    return (
        <div className='AboutPage'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
        </div>
    )
}
