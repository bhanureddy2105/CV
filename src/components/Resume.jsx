import { Button } from './Button'
import { ArrowDownIcon } from './icons/ArrowDownIcon'

function Resume() {

    return (
        <Button href="#" variant="secondary" className="group mt-6 w-full">
            Download Resume
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
    )
}


export default Resume