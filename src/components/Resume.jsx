import { Button } from './Button'
import { ArrowDownIcon } from './icons/ArrowDownIcon'

function Resume() {

    const handleDownload = () => {
        try {
            const link = document.createElement('a');
            link.href = '/Resume.pdf';
            link.download = 'Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading the PDF file', error);
        }
    };

    return (       
        <Button onClick={handleDownload} variant="secondary" className="group mt-6 w-full">
            Download Resume
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
    )
}


export default Resume