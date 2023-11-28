const Schedule = async () => {
  const response = await fetch('https://endpoint.free.mockoapp.net/agenda/teste2')
  const items = await response.json();

  return (
    <div className="bg-white rounded">
      <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: "rgba(80, 153, 153, 0.2)" }}>
        <h2 className="grade-title" style={{ color: "#000070" }}>Agenda</h2>
      </div>
      {items.map((item: GradeItemProps) => (
        <Item
          title={item.title}
          location={item.location}
          time={item.time}
          key={`${item.location} - ${item.time}`}
        />
      ))}
    </div>
  )
}

const Item = (props: GradeItemProps) => {
  const { title, location, time } = props;

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex gap-4 py-4 px-3">
        <div className="d-flex flex-column align-items-center justify-content-center gap-2" style={{width: "40px"}}>
          <img src="/home/calendar-icon.svg" alt="icone de calendario" />
        </div>
        <div className="d-flex flex-column justify-content-center gap-1">
          <p className="m-0 fs-5" style={{ color: "#0000fa" }}><strong>{title}</strong></p>
          <p className="m-0 text-muted d-inline">{location}<span> - {time}</span></p>
        </div>
      </div>
      <hr className="m-0" />
    </div>
  )
}


export default Schedule;