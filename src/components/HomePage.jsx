import { Container } from './Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from './SocialIcons'
import Experience from './Experience'
import Newsletter from './NewsLetter'
import Resume from './Resume'
import { HomePagePhotos } from './HomePagePhotos'

export function HomePage(props) {

    let experiences = props.experience || []


    function SocialLink({ icon: Icon, ...props }) {
        return (
            <a className="group -m-1 p-1" {...props}>
                <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
        )
    }

    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Graduate Student @ University of Houston | Software Developer
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Hello, I'm Bhanu Prakash Reddy Vangeti, a skilled software developer proficient in C++, Java, Python, and JavaScript. Specializing in Angular, React JS, and Spring Boot, I've crafted transformative applications at Apollo Telehealth Services. Currently pursuing a Master's in Computer Science at the University of Houston, my focus includes Data Structures, Cloud Computing, and Digital Image Processing. As the founder of an online coding community, I've explored cloud security and AI, with a publication on Cloud Security Concepts.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://twitter.com"
                            aria-label="Follow on Twitter"
                            icon={TwitterIcon}
                        />
                        <SocialLink
                            href="https://instagram.com"
                            aria-label="Follow on Instagram"
                            icon={InstagramIcon}
                        />
                        <SocialLink
                            href="https://github.com"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://linkedin.com"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>
            <HomePagePhotos />
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        <Experience experience={experiences} />
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        {/* <Newsletter /> */}
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    )
}