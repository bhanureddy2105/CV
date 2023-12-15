import { MailIcon } from './icons/MailIcon'


function Skills(props) {
    let skills = props.skills.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Skills</span>
            </h2>
            <div className="flex flex-row flex-wrap">
                {skills.map(skill => (
                    <div className='mr-2 mb-3 border rounded-xl border-solid border-slate-500 px-2' key={skill.id}>{skill.name} </div>
                ))}
            </div>
        </div>
    )
}

export default Skills