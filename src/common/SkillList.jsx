function SkillList({ src, skill }) {
  return (
    <span>
        <img src={src} alt="Check Icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList