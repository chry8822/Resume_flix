import "./footer.scss"

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="snsWrap">
          <a href="https://covelope.tistory.com/" target="_blank">
            <img className="snsIcon" src={process.env.PUBLIC_URL + "/blog.png"} alt="블로그아이콘" title="블로그" />
          </a>
          <a href="https://github.com/chry8822" target="_blank">
            <img className="snsIcon" src={process.env.PUBLIC_URL + "/git.png"} alt="깃허브아이콘" title="깃허브" />
          </a>
          <a href="mailto:goggg8822@nave.com" target="_blank">
            <img className="snsIcon" src={process.env.PUBLIC_URL + "/email.png"} alt="이메일아이콘" title="이메일" />
          </a>
          <a href="https://instagram.com/chrysan_th" target="_blank">
            <img className="snsIcon" src={process.env.PUBLIC_URL + "/instagram.png"} alt="인스타아이콘" title="인스타" />
          </a>
        </div>
        <div className="member">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Sass</li>
          </ul>
          <ul>
            <li>goggg8822@naver.com</li>
            <li>010-7197-3084</li>
            <li>https://covelope.tistory.com/</li>
          </ul>
        </div>
        <ul className="copyTextWrap">
          <li>Front-end service korea 신입프론트엔드개발자번호 : 제 2022-서울동작-401호</li>
          <li>대표: 오국화</li>
          <li>이메일 주소: goggg8822@naver.com</li>
          <li>주소: 대한민국 서울시 동작구 사당동</li>
        </ul>
      </div>
    </div>
  )
}
