export type Experience = {
    title: String;
    workPlace: WorkPlace;
    dateBegin: string;
    dateEnd: string;
    responsibilities: string[];
};

type WorkPlace = {
    name: string;
    key: number;
};

export const workPlaces: WorkPlace[] = [
    {
        name: 'Last Lock',
        key: 0,
    },
    {
        name: 'UW Madison',
        key: 1,
    },
    {
        name: 'Freelance',
        key: 2,
    },
    {
        name: 'Certifications',
        key: 3,
    },
];

const experiences: Experience[] = [
    {
        workPlace: workPlaces[0],
        title: 'Lead Software Engineer',
        dateBegin: 'Jun 2023',
        dateEnd: 'Aug 2023',
        responsibilities: [
            'Write, manage, and maintain tech stacks for a diverse array of projects for internal and external stakeholders',
            'Developed with a wide variety of tools, platforms, and frameworks such as Typescript (Javascript), React, NextJS, Swift, AWS',
            'Implemented UI/UX best procedures for product development',
        ],
    },
    {
        workPlace: workPlaces[1],
        title: 'CS Capstone Peer Mentor',
        dateBegin: 'Aug 2022',
        dateEnd: 'Dec 2022',
        responsibilities: ['Test', 'Test'],
    },
    {
        workPlace: workPlaces[2],
        title: 'Free Lancing and Tutoring',
        dateBegin: '',
        dateEnd: '',
        responsibilities: ['Test', 'Test'],
    },
    {
        workPlace: workPlaces[3],
        title: 'Certified ScrumMaster, Scrum Alliance',
        dateBegin: 'Jul 2022',
        dateEnd: 'Jul 2024',
        responsibilities: [
            'Proficient in Scrum philosophy',
            'Coordinate with cross-functional team of engineers, designers, and managers on a daily basis',
        ],
    },
];

export default experiences;
