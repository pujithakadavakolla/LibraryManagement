import React from 'react'
import '../Styles/home.css'
import { HiArrowNarrowRight } from "react-icons/hi";


const Home = () => {
    return (
        <div className='home'>
            <div className='im0'>
            <div className='im'>
                <div className='first'>
                    <h1>Digital Library</h1>
                    <p>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital    Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more.</p>
                    <div className="last">
                        <div className="lastbtn">Learn More </div> <HiArrowNarrowRight style={{ marginTop: 4, marginLeft: 20, fontSize: 30 }} />
                    </div>
                </div>
            </div>
            </div>
            <div className='space'>
            <div className='img2'>
                <div className="div2">
                    <p>ABOUT</p>
                    <h3>Book Shelf Buddy</h3>
                    <p>Books Hub recently announced a new plan for the much-anticipated Book Shelf Buddy  renovation. The revised plan considers ideas raised by the community to expand the community room for greater program capacity, increase space dedicated to children’s services, and enhance the collections to make it a go-to destination. </p>
                    <div className='last2'>
                    <div className="lastbtn2">Learn More </div> <HiArrowNarrowRight style={{ marginTop: 4, marginLeft: 20, fontSize: 30 }} />
                </div>
                </div>
            </div>
            </div>
            <div className='img3'>
                <div className='div3'>
                    <p>EXPLORE</p>
                    <h3>Peterson Business Collection</h3>
                    <p>Our Peterson Business Collection offers support for job seekers, entrepreneurs, small businesses, and nonprofits. The Library also provides financial literacy resources for individuals of all skill levels. Access our business databases to get started. Make sure to check out our business workshops too!</p>
                    <div className='last3'>
                    <div className="lastbtn3">Learn More </div> <HiArrowNarrowRight style={{ marginTop: 4, marginLeft: 20, fontSize: 30 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
