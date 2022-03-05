
export const Table = ({headers, rows, rowClickHandler}) => (<table>
    <thead>
        <tr>{headers.map((header, i) => <th key={i.toString()}>{header.text}</th>)}</tr>
    </thead>
    <tbody>
    {rows.map(({fields, id}, i) => <tr key={i.toString()} onClick={() => rowClickHandler(id)}>{
        fields.map((field, j) => <td key={j.toString()}>{
            field
            //field.link ? <Link to={field.link}>{field.text}</Link> : field.text
        }</td>)
    }</tr>)}
    </tbody>
</table>);
