import { Link } from "react-router-dom";

export const Table = ({headers, rows}) => (<table>
    <thead>
        <tr>{headers.map((header, i) => <th key={i}>{header.text}</th>)}</tr>
    </thead>
    <tbody>
    {rows.map(({fields}, i) => <tr key={i}>{
        fields.map((field, j) => <td key={j}>{
            field.link ? <Link to={field.link}>{field.text}</Link> : field.text
        }</td>)
    }</tr>)}
    </tbody>
</table>);
