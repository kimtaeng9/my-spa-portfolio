import React from "react";
import "./About.css"

function About() {
    return (
        <section className="about-section container">
            <div className="about-content">
                <div className="about-text">
                    <h2>소개</h2>
                    <p>끊임없이 배우고 성장하려는 자세로, 저는 Java와 Spring Boot를 중심으로 백엔드 개발에 열정을 가진 신입 개발자입니다. 문제 해결, 논리적 사고, 그리고 새로운 지식을 추구하는 과정에서 느끼는 성취감이 저를 소프트웨어 개발의 길로 이끌었습니다. 특히, 탄탄하고 확장성 있는 시스템을 구축하는 일에서 큰 보람을 느끼며, 잘 설계된 백엔드 서비스가 사용자 경험에 미치는 긍정적인 영향을 생각하며 동기부여를 얻습니다.

                    개발 작업 외의 시간에는 새로운 기술을 탐구하고, 운동과 여행을 통해 활력을 충전합니다.</p>
                </div>
                <div className="about-skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>MySQL</li>
                        <li>JPA</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;