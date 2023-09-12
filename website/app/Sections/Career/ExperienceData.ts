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
        name: 'Self Employed',
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
            'Developed and launched highly interactive web and mobile applications for a variety of purposes including SaaS products, public landing pages, and tech conferences',
            'Architected and implemented full-stack web conference scheduling system for a we-work like client by leveraging cloud microservices',
            "Contributed extensively to company's proof of concept IoT web application and developed a permission management system for admins using typescript, React, and AWS",
            'Implemented UI/UX procedures for product development such as customer reviews',
            'Acted as consultant to develop probper agile processes using scrum and kanban doctrines',
        ],
    },
    {
        workPlace: workPlaces[1],
        title: 'CS Capstone Peer Mentor',
        dateBegin: 'Aug 2022',
        dateEnd: 'Dec 2022',
        responsibilities: [
            'Worked with a three teams of engineering students to build an IoT indoor navigation application and automation data tracking software for Last Lock and Mcanta',
            'Helped both teams adhere to and adapt the scrum philosophies using project managment tools including Click Up and Jira',
            "Interfaced with capstone mentors to ensure team's progres aligns with company, class, and student goals on a biweekly basis",
        ],
    },
    {
        workPlace: workPlaces[2],
        title: 'Freelancing and Tutoring',
        dateBegin: '',
        dateEnd: '',
        responsibilities: [
            "I've helped a variety clients build awesome personal projects and enterprise ventures in many domains such as AI and scheduling software ",
            "I also tutor computer science and data science! I've helped clients prepare for technical interviews or exams, learn programming fundamentals, and explore exciting technologies!",
        ],
    },
    {
        workPlace: workPlaces[3],
        title: 'Certified ScrumMaster, Scrum Alliance',
        dateBegin: 'Jul 2022',
        dateEnd: 'Jul 2024',
        responsibilities: [
            'Proficient in scrum philosophies',
            'Coordinate with cross-functional team of engineers, designers, and managers on a daily basis',
        ],
    },
];

export default experiences;
