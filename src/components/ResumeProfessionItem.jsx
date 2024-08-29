const ResumeProfessionItem = ({item}) => {

  console.log('resume profession item: ', item)
  return (
    <div className="resume-profession-item">
      <h3 className="resume-profession-item__title">{item.title} | {item.dateStart} - {item.dateEnd}</h3>
      <h4 className="resume-profession-item__title">{item.positionName} | {item.dateStart} - {item.dateEnd}</h4>
      <ul>
        {item.keyTasks.map((keyTask) => (
          <li key={keyTask}>{keyTask}</li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeProfessionItem
