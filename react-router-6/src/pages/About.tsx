import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {}; 

const AboutPage: React.FunctionComponent<IAboutPageProps> = props => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        console.log('------>', number);
        if (number) {
            setMessage('the number is ' + number);
        } else {
            setMessage('No number was provided');
        }
    }, [number]);

    return <div>
        <p>About page</p>
        <p>{message}</p>
    </div>;
};

export default AboutPage;