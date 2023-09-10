type Experience = {
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

// const experienceData: Experience[] = [
//     {
//         title: 'Lead Software Engineer',
//         dateBegin: 'Jun 2023',
//         dateEnd: 'Aug 2023',
//         responsibilities: ['Test', 'Test'],
//     },
// ];

// export default experienceData;
