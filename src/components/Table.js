import {StatusIndicator} from "../status/Status-indicator";
import styles from './Table.module.css';

export const Table = ({headers, rows, rowClickHandler}) => (<table>
    <thead>
        <tr>{headers.map((header, i) => <th key={i.toString()}>{header.text}</th>)}</tr>
    </thead>
    <tbody>
    {rows.map(({fields, id}, i) => <tr key={i.toString()} onClick={() => rowClickHandler(id)}>{
        fields.map((field, j) => {
            const isStatusCell = j === 1;
            const child = isStatusCell ? [<StatusIndicator status={field}/>,field] : field;
            return <td key={j.toString()} className={isStatusCell ? styles.status : '' }>{child}</td>
        })
    }</tr>)}
    </tbody>
</table>);
