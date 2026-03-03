import type { Accesor } from "@src/index"

interface Props<T>{
  column: Accesor<T>[]
  data: T[]|undefined
}

function Table<T extends object> ({column,data}: Props<T>) {
  if(!data || data.length === 0) return <p>No hay datos disponibles</p>
  return (
    <table>
      <thead>
        <tr>
          {column.map((col,i)=>(
            <th key={i}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row,indexRow)=>(
          <tr key={indexRow}>
            {column.map((col,indexCol)=>(
              <td key={indexCol}>{String(row[col.accesor])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
