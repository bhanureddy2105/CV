import btech from '../images/logos/btech.svg'
import masters from '../images/logos/masters.svg'
import { BriefcaseIcon } from './icons/BriedCaseIcon'


export default function Education() {

    const Role = ({ role }) => {
        let startLabel =
            typeof role.start === 'string' ? role.start : role.start.label
        let startDate =
            typeof role.start === 'string' ? role.start : role.start.dateTime

        let endLabel = typeof role.end === 'string' ? role.end : role.end.label
        let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

        return (
            <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img src={role.logo} alt="" className="h-7 w-7" unoptimized />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {role.company}
                    </dd>
                    <dt className="sr-only">GPA</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                        GPA: {role.gpa}
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                        className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                        aria-label={`${startLabel} until ${endLabel}`}
                    >
                        <time dateTime={startDate}>{startLabel}</time>{' '}
                        <span aria-hidden="true">—</span>{' '}
                        <time dateTime={endDate}>{endLabel}</time>
                    </dd>
                </dl>
            </li>
        )
    }

    const education = [
        {
            company: 'University of Houston',
            gpa: '3.74',
            logo: masters,
            start: '2022',
            end: '2023',
        },
        {
            company: 'Icfai University',
            gpa: '9.66',
            logo: btech,
            start: '2017',
            end: '2021',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {education.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
        </div>
    )
}