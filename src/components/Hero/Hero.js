import React from 'react';

import { Slider } from './Hero.styles';

export default class Hero extends React.Component {
    state = {
        image: [
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
        return (
            <div>
                <Slider>
                    {this.state.image[0]}
                </Slider>
            </div>
        );
    }
}
