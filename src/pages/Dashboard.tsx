import { gameData, IndexTemplate, movieColumns, movieData, musicColumns, musicData, Table, videogameColumns } from "@src/index";

function Dashboard() {
  const today:Date=new Date()
  const options:Intl.DateTimeFormatOptions={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  }
  const date:string=today.toLocaleDateString("ES-es",options)
  return (
    <IndexTemplate companyName="Collection EC" date={date}>
      <section>
        <Table column={musicColumns} data={musicData}/>
      </section>
      <section>
        <Table column={videogameColumns} data={gameData}/>
      </section>
      <section>
        <Table column={movieColumns} data={movieData}/>
      </section>
    </IndexTemplate>
  )
}

export default Dashboard
