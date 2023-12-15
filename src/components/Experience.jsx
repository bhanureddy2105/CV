import { BriefcaseIcon } from './icons/BriedCaseIcon'


function Experience({ experience }) {


    const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    const getDate = (date) => {
        return `${monthNames[new Date(date * 1000).getMonth()]} ${new Date(date * 1000).getFullYear()}`
    }


    return (
        <>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-8">
                    <BriefcaseIcon className="h-6 w-6 flex-none" />
                    <span className="ml-3">Experience</span>
                </h2>
                <div className='divide-y divide-gray-200'>
                    {experience.map(exp => (
                        <div>
                            <div className="hover:bg-zinc-50 w-full p-4 rounded-md hover:cursor-pointer">
                                <div className="mb-8">
                                    <div className="flex flex-row justify-items-center place-content-between">
                                        <div className="font-semibold text-lg">{exp.name}</div>
                                        <div className="font-light text-sm">{getDate(exp.startDate.seconds)} - {getDate(exp.endDate.seconds)}</div>
                                    </div>
                                    <div className="font-medium text-base">{exp.role}</div>
                                </div>
                                <div className="text-sm ">
                                    {exp.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Experience