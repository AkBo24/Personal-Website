import React from 'react';

const FutureCard = () => {
    return (
        <div className='flex-1 p-8 drop-shadow-card bg-slate-100 rounded-md max-w-md'>
            <div
                className='absolute -top-5 -right-5
                            flex justify-center items-center 
                            bg-secondaryGold text-2xl
                            rounded-full w-12 h-12'>
                3
            </div>

            <div className='journeyCardTextContainer'>
                <h3 className='journeyCardTitle'>The Future</h3>

                <div>
                    <h4 className='bioCardSectionTitle'>5 Years…</h4>
                    <p>
                        In the short term, I want to learn both the technical and business
                        aspects of product development. Everything from the ideas
                        conception, to its prototyping, and finally launch fascinates me!
                        I love listening to podcasts like How I Built This (I&apos;m
                        currently reading the book) or learning about different dev
                        practices. My current goal is to learn a ton.
                    </p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>10 Years…</h4>
                    <p>
                        I&apos;d like to move into leadership and product management. From
                        my experiences with my Capstone course and high-school robotics
                        team, I&apos;ve learned that I&apos;m great at taking ideas and
                        building teams. So hopefully thats what I&apos;ll be able to do.
                    </p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Beyond…</h4>
                    <p>
                        Not to sure about this one. I’ll have to come back to this but
                        what I do know is I’d like to teach.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FutureCard;
