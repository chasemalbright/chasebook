import React from 'react'
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://stemcellstransplantinstitute.com/wp-content/uploads/2019/04/Houston-TX.jpg" profileSrc="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" title="Chase Albright"/>
            <Story image="https://stemcellstransplantinstitute.com/wp-content/uploads/2019/04/Houston-TX.jpg" profileSrc="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" title="User 2"/>
            <Story image="https://stemcellstransplantinstitute.com/wp-content/uploads/2019/04/Houston-TX.jpg" profileSrc="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" title="User 3"/>
            <Story image="https://stemcellstransplantinstitute.com/wp-content/uploads/2019/04/Houston-TX.jpg" profileSrc="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" title="User 4"/>
            <Story image="https://stemcellstransplantinstitute.com/wp-content/uploads/2019/04/Houston-TX.jpg" profileSrc="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" title="User 5"/>
        </div>
    )
}

export default StoryReel
