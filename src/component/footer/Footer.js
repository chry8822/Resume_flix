
export default function Footer() {
  return (
    <div>
      <div className="snsWrap">
        <a href=""><img src={process.env.PUBLIC_URL + "/git.png"} alt="" /></a>
        <a href=""><img src={process.env.PUBLIC_URL + "/blog.png"} alt="" /></a>
        <a href=""><img src={process.env.PUBLIC_URL + "/email.png"} alt="" /></a>
        <a href=""><img src={process.env.PUBLIC_URL + "/instagram.png"} alt="" /></a>
      </div>

    </div>
  )
}
