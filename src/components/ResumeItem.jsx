const ResumeItem = ({ item }) => {

  console.log('resume item: ', item)
  return (
    <div className="resume-item">
      <h3 className="resume-item__title">{item.title}</h3>
      <p className="resume-item__date">{item.dateStart.toISOString()} - {item.dateEnd.toISOString()}</p>
      <p className="resume-item__description">{item.description}</p>
    </div>
  )
}

export default ResumeItem
