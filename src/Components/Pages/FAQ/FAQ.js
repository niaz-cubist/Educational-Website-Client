import React, { useEffect } from 'react';

const FAQ = () => {

    useEffect(() => {
        document.title = 'Login';
    }, [])

    return (
        <div className='w-9/12 container mt-20'>
            <h2>What is online learning like?</h2>
            <p>Many aspects of online learning look a lot like what you're used to in a traditional classroom, with the added benefit of learning some cool technology and typically conducting your schoolwork on a much more flexible schedule. And, the best part, you'll be supported through every step of your academic journey.</p><br />

            <h2>Can I learn at my own pace?</h2>
            <p>Self-paced learning means you can learn in your own time and schedule. You don't need to complete the same assignments or learn at the same time as others. You can proceed from one topic or segment to the next at your speed</p><br />

            <h2>Why should I use online learning?</h2>
            <p>Among the many benefits of online learning, you'll find that virtual education allows you to enjoy a more flexible schedule, can reduce the cost of your degree, and can allow you to more easily develop your career alongside furthering your education.</p>
        </div>
    );
};

export default FAQ;