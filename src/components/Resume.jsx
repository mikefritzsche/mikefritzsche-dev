import { data } from '../data/resume'

import ResumeProfessionItem from './ResumeProfessionItem'

const Resume = () => {
  console.log('data.socialLinks: ', )
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.address}</div>
      <div>
        {data.socialLinks.map((socialLink) => (
          <>{socialLink.name}: {socialLink.link}</>
        ))}
      </div>
      <div>
        <div>Summary</div>
        <div>{data.summary}</div>
      </div>
      {data.professionExperience.map((profession) => (
        <ResumeProfessionItem key={profession.title} item={profession} />
      ))}
    </div>
  )
}

export default Resume

