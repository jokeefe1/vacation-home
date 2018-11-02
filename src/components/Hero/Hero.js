import React from 'react';

import { Slider } from './Hero.styles';

export default class Hero extends React.Component {
    state = {
        images: [
            <img
                src="\img\aaron-mello-625621-unsplash.jpeg"
                alt="Orlando Eye ferris wheel"
            />,
            <img
                src="\img\christian-chen-753595-unsplash.jpeg"
                alt="Universal Studios"
            />,
            <img
                src="\img\skylar-sahakian-609720-unsplash.jpeg"
                alt="Tea Cups"
            />,
            <img
                src="\img\travis-gergen-193909-unsplash.jpeg"
                alt="Walt Disney and Micky Mouse"
            />,
            <img
                src="\img\troy-jarrell-57698-unsplash.jpeg"
                alt="The Wizarding World of Harry Potter"
            />
        ]
    };

    render() {

        const { images } = this.state

        return <div>
                <Slider>
                    {images.map((image,i) => image[i])}
                </Slider>
            </div>;
    }
}
