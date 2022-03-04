import './Issue.css';

export const Issue = ({issue}) => (
    <article className="issue">
        <header>
            <span className={`status-indicator ${issue.status.toLowerCase()}`} title={issue.statusText}></span>
            <h4 className="issue__title">{issue.title}</h4>
        </header>
        <main>
            <p className="issue__description">{issue.description}</p>
        </main>
    </article>
);
