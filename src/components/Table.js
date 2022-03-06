import {StatusIndicator} from "../status/Status-indicator";
import styles from './Table.module.css';

export const Table = ({headers, rows, rowClickHandler}) => (<table className={styles.tableStriped}>
    <thead>
        <tr>{headers.map((header, i) => <th key={i.toString()}>{header.text}</th>)}</tr>
    </thead>
    <tbody>
    {rows.map(({fields, id}, i) => <tr key={i.toString()} onClick={() => rowClickHandler(id)}>{
        fields.map((field, j) => {
            const isStatusCell = j === 1;
            return <td key={j.toString()} className={isStatusCell ? styles.status : '' }>
                {isStatusCell ? <StatusIndicator status={field}/> : null}
                {field}
            </td>
        })
    }</tr>)}
    </tbody>
</table>);
