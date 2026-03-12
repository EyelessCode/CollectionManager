const today:Date=new Date()
const options:Intl.DateTimeFormatOptions={
  weekday:"long",
  year:"numeric",
  month:"long",
  day:"numeric"
}
export const showDate:string=today.toLocaleDateString("ES-es",options)
