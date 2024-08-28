import resumeData from '../data/resume'
import ResumeItem from "./ResumeItem";

const Resume = () => {
  return (
    <div>
      <>
      {/*<p>Resume</p>*/}
      {resumeData.map((item) => (
        <ResumeItem key={item.title} item={item} />
      ))}
        </>
    </div>
  )
}

export default Resume
