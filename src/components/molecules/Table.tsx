import type { Accesor } from "@src/index"

interface Props<T>{
  column: Accesor<T>[]
  data: T[]|undefined
  classNTable?:string
  classNRow?:string
  classNColumn?:string
}

function Table<T extends object> ({column,data,classNColumn,classNRow,classNTable}: Props<T>) {
  if(!data || data.length === 0) return <p className="font-extrabold">No hay datos disponibles</p>
  return (
    <table className={`${classNTable}`}>
      <thead>
        <tr>
          {column.map((col,i)=>(
            <th className={`${classNColumn} bg-cyan-700 text-white border-white`} key={i}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row,indexRow)=>(
          <tr key={indexRow}>
            {column.map((col,indexCol)=>(
              <td className={`${classNRow}`} key={indexCol}>{String(row[col.accesor])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
