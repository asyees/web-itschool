import React, { useEffect } from 'react';
import '../styles';

const Top2Component = () => {
    useEffect(() => {
        const revealTop2 = () => {
            const top2 = document.querySelector('.top2');
            if (top2) {
                const top2Position = top2.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (top2Position < windowHeight) {
                    top2.classList.add('visible');
                    window.removeEventListener('scroll', revealTop2);
                }
            }
        };

        window.addEventListener('scroll', revealTop2);

        return () => {
            window.removeEventListener('scroll', revealTop2);
        };
    }, []);

    return (
        <div className="top2 hidden">
            {/* Ваш контент здесь */}
        </div>
    );
};

export default Top2Component;
