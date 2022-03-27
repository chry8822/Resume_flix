import "./listTitle.scss"

export default function ListTitle (props) {
  const { title } = props

  return ( 
      <div className="listTitle">{title}</div>
  )
}