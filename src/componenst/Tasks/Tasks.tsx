import { type ReactElement, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Tasks component that fetches and displays a markdown file.
 *
 * @returns {ReactElement} The rendered Tasks component.
 * @constructor
 */

export const Tasks = (): ReactElement => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch('/tasks.md')
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div style={{ padding: '10px' }}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};
