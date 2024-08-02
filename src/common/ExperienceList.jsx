function ExperienceList({ time, role, jobdesc}) {
  return (
    <span>
        <p className="Time">{time}</p>
        <h3 className="Role">{role}</h3>
        <p className="JobDesc">{jobdesc}</p>
    </span>
  )
}

export default ExperienceList