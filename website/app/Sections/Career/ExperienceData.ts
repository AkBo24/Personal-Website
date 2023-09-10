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
        name: 'Lead Software Engineer',
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
        responsibilities: ['Test', 'Test'],
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
        dateBegin: 'Aug 2022',
        dateEnd: 'Dec 2022',
        responsibilities: ['Test', 'Test'],
    },
    {
        workPlace: workPlaces[3],
        title: 'Certified ScrumMaster, Scrum Alliance',
        dateBegin: 'Aug 2022',
        dateEnd: 'Dec 2022',
        responsibilities: ['Test', 'Test'],
    },
];

export default experiences;
