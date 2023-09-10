import { workPlaces } from '../ExperienceData';

const ExperienceSelector = ({
    activeExperience,
    updateActiveExperience,
}: {
    activeExperience: number;
    updateActiveExperience: (key: number) => void;
}) => {
    // const [activeExperience, setActiveExperience] = useState<number>(0);
    const setStyle = (key: number): string => {
        const baseStyle = 'block p-3 text-left border-l rounded-r-[1px]';
        return activeExperience === key
            ? `${baseStyle} bg-lightPrimaryBlue/20 border-l-mint`
            : `${baseStyle} transition ease-in-out border-l-mint/20 hover:bg-lightPrimaryBlue/20 hover:border-l-mint duration-200`;
    };

    return (
        <div className='flex md:flex-col justify-start'>
            {workPlaces.map((workPlace) => (
                <button
                    className={setStyle(workPlace.key)}
                    onClick={(e) => updateActiveExperience(workPlace.key)}
                    key={workPlace.key}>
                    {workPlace.name}
                </button>
            ))}
        </div>
    );
};

export default ExperienceSelector;
