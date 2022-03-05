import './Issue.css';
import { useParams } from 'react-router-dom';


export const Issue = ({issue}) => {
    let { id } = useParams();

    return (
    <article className="issue">
        <header>
            <h1>Id is: {id}</h1>
            <span className={`status-indicator ${issue.status.toLowerCase()}`} title={issue.statusText}></span>
            <h4 className="issue__title">{issue.title}</h4>
        </header>
        <main>
            <p className="issue__description">{issue.description}</p>
        </main>
    </article>
)};
