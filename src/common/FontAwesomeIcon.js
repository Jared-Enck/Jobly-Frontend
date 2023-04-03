export default function FontAwesomeIcon(props) {
  return (
    <span className={props.span || ''}>
      <i className={props.icon}></i>
    </span>
  )
}