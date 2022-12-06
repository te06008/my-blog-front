import Styled from './IntroduceMe.styled';

function IntroduceMe() {
  return (
    <Styled.IntroContent>
      <div className="intro-title">Yeo ChungGwan</div>
      <p>
        주니어 프론트엔드 개발자입니다.
        <br />
        {`React와 Problem Solving에 관심이 많습니다.`}
      </p>
      <ul>
        <li>
          Work Experience
          <br />
          <ul>
            <li>In The Forest - FrontEnd Developer (2021.12 ~ )</li>
          </ul>
        </li>
        <li>
          Education
          <ul>
            <li>한양대학교 컴퓨터소프트웨어(2019.03 ~ 현재 휴학)</li>
          </ul>
        </li>
        <li>
          Skills
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScirpt</li>
            <li>C++</li>
          </ul>
        </li>
        <details>
          <summary>Awards</summary>
          <ul>
            <li>제 6회 한양대학교 프로그래밍 경진대회 Beginner 대상</li>
            <li>2021 SW 기술 창업 아이디어 경진대회 최우수상</li>
            <li>2022 현대모비스 알고리즘 경진대회 일반부 본선 우수상</li>
            <li>2018 ICT 어워드 코리아 소프트웨어와 코딩분야 은상</li>
            <li>
              제 1회 서강대학교 총장배 전국 고등학생 알고리즘 경진대회 3등
            </li>
            <li>제 34회 한국정보올림피아드 경시부문 전국대회 은상</li>
            <li>제 32회 한국정보올림피아드 경시부문 전국대회 동상</li>
            <li>제 31회 대구광역시 정보올림피아드 경시부문 은상</li>
            <li>제 29회 대구광역시 정보올림피아드 경시부문 은상</li>
            <li>그 외 다수의 수상내역 보유</li>
          </ul>
        </details>
      </ul>
    </Styled.IntroContent>
  );
}
export default IntroduceMe;
