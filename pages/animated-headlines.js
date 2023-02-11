import { useEffect, useState } from "react";


const services = ["UK Immigration", "Visit Visa", "Schengen Visa"];

const AnimatedHeadline = () => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setShowAnimation(true);
    }, []);

    useEffect(() => {
        let intervalId = null;
        if (showAnimation) {
            intervalId = setInterval(() => {
                setCurrentServiceIndex(currentServiceIndex + 1);
                if (currentServiceIndex + 1 === services.length) {
                    setCurrentServiceIndex(0);
                }
            }, 3000);
        }

        return () => clearInterval(intervalId);
    }, [showAnimation]);


    return (
        <h1>
            We provide {services[currentServiceIndex]} services
        </h1>
    )

};

export default AnimatedHeadline;