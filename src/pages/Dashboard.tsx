import { gameData, DashboardTemplate, movieColumns, movieData, 
  musicColumns, musicData, Table, videogameColumns } from "@src/index";

function Dashboard() {
  const classNSectCommon:string="bg-white shadow rounded-xs p-4 overflow-scroll pc-ultra:row-span-12"
  const classNTableCommon:string="w-full border border-cyan-600 rounded-xs "+
    "text-sm large-tablet:text-lg laptop:text-lg pc-ultra:text-2xl"
  const classNRowColumnCommon:string="border p-1 border-cyan-700"

  return (
    <DashboardTemplate>
      <section className={`${classNSectCommon}`}>
        <Table classNRow={`${classNRowColumnCommon}`} classNColumn={`${classNRowColumnCommon}`}
          classNTable={`${classNTableCommon}`}
          column={musicColumns} data={musicData}/>
      </section>
      <section className={`${classNSectCommon}`}>
        <Table classNRow={`${classNRowColumnCommon}`} classNColumn={`${classNRowColumnCommon}`}
          classNTable={`${classNTableCommon}`}
          column={videogameColumns} data={gameData}/>
      </section>
      <section className={`${classNSectCommon}`}>
        <Table classNRow={`${classNRowColumnCommon}`} classNColumn={`${classNRowColumnCommon}`}
          classNTable={`${classNTableCommon}`}
          column={movieColumns} data={movieData}/>
      </section>
    </DashboardTemplate>
  )
}

export default Dashboard
