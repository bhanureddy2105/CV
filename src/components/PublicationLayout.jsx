import { SimpleLayout } from "./SimpleLayout"
import { Card } from "./Card"
import { format } from 'date-fns';


function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM do yyyy");
    return formattedDate;
}

export function PublicationLayout() {
    let articles = [{
        id: "123",
        date: "01/14/2024",
        title: "Cloud Security Concepts, Threats, and Solutions: An Artificial Intelligence-Based Approach",
        description: "This chapter mainly focuses on security issues of Artificial Intelligence technology and provides effective countermeasures to improve data privacy."
    }]

    return (
        <SimpleLayout
            title="Writing on software design, company building, and the aerospace industry."
            intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {articles.map((article) => (
                        <article className="md:grid md:grid-cols-4 md:items-baseline">
                            <Card className="md:col-span-3">
                                <Card.Title href={`#/publications/${article.id}`}>
                                    {article.title}
                                </Card.Title>
                                <Card.Eyebrow
                                    as="time"
                                    dateTime={article.date}
                                    className="md:hidden"
                                    decorate
                                >
                                    {formatDate(article.date)}
                                </Card.Eyebrow>
                                <Card.Description>{article.description}</Card.Description>
                                <Card.Cta>Read article</Card.Cta>
                            </Card>
                            <Card.Eyebrow
                                as="time"
                                dateTime={article.date}
                                className="mt-1 hidden md:block"
                            >
                                {formatDate(article.date)}
                            </Card.Eyebrow>
                        </article>
                    ))}
                </div>
            </div>
        </SimpleLayout>
    )
}