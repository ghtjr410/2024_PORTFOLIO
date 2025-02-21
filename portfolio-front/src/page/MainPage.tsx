import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

const MainPage = () => {
    const [copied, setCopied] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const openProfileModal = () => setIsProfileOpen(true);
    const closeProfileModal = () => setIsProfileOpen(false);
    

    const handleCopy = () => {
        const email = "ghtjr410@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // 2초 후 메시지 사라짐
        });
    };
    
    return (
        <>
            {/* Main */}
            <div className="w-[1080px] mx-auto">
                {/* About Me */}
                <div className="w-full py-20 text-6xl text-blue-700 font-black" id="about-me">About Me</div>
                {/* <div className="w-full  mb-12 border-b border-gray-400"></div> */}
                <div className="w-full flex gap-16 pt-10">
                    <div 
                        className="w-[240px] h-[320px] border border-gray-300 overflow-hidden cursor-pointer relative group"
                        onClick={openProfileModal}>
                        <img 
                            className="h-full w-full object-cover aspect-square" 
                            src="https://images.ghtjr.com/905421de-286c-4f4f-9c57-ed90f39b0165_%EC%B5%9C%ED%98%B8%EC%84%9D%20-%EB%B0%98%EB%AA%85%ED%95%A8.jpg" 
                            alt="Preview" />
                                    {/* Hover 오버레이 */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
                            <AiOutlineFullscreen className="text-white text-4xl m-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 w-[650px] justify-center">
                        <div className=" text-4xl font-black">
                            백엔드 신입 개발자 최호석
                        </div>
                        <div className="bg-white px-2 py-4 border-2 border-stone-600 text-black  rounded-md w-[775px] font-black">
                            <p className="text-xl leading-9 font-bold">
                                <span className="text-red-600">자기 주도 학습</span>, <span className="text-red-600">긍정적인 사고</span>, <span className="text-red-600">동료들과의 화합</span> 세 가지를 핵심 가치로 생각합니다.
                                <br />개발 중 마주한 문제에 대한 해결 과정을 작성하는 것을 좋아하고
                                도움이 필요한 동료에게 문서를 공유하여 같이 문제 해결하는 것을 좋아합니다.
                                <br />또한 어려운 상황에서 "재밌겠다, 이건 얼마나 걸릴까? 하루 종일도 할 수 있어"라고
                                <br />긍정적인 생각을 하며 개발하는 것을 좋아합니다.
                            </p>
                        </div>
                        
                    </div>
                </div>
                {/* Contact */}
                <div className="mt-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <MdEmail /> 
                        <div className="flex items-center gap-2">
                            {/* 이메일 텍스트 */}
                            <div>ghtjr410@gmail.com</div>

                            {/* 복사 아이콘 */}
                            <button
                                onClick={handleCopy}
                                className="text-black hover:text-gray-500 transition-colors"
                            >
                                <FaCopy size={17} />
                            </button>

                            {/* 복사 완료 메시지 */}
                            {copied && (
                                <span className="text-green-500 text-sm ml-2">
                                    Copied!
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <FaGithub/>
                        <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg flex items-center gap-2"  href="https://github.com/ghtjr410" target="_blank" rel="noopener noreferrer">
                            https://github.com/ghtjr410
                            <HiCursorClick size={17} />
                        </a>
                    </div>
                </div>
                {/* 키워드 */}
                <div className="flex gap-4 pt-20 pb-40  border-b border-gray-400">
                    <div className="bg-white text-stone-600 border-2 border-stone-600 px-6 py-2 rounded-full text-center text-xl font-black  flex items-center justify-center">
                        # 2024년도 자격증 4개 취득
                    </div>
                    <div className="bg-white text-stone-600 border-2 border-stone-600 px-6 py-2 rounded-full text-center text-xl font-black  flex items-center justify-center">
                        # 2024년도 1000↑ Commit
                    </div>
                    <div className="bg-white text-stone-600 border-2 border-stone-600 px-6 py-2 rounded-full text-center text-xl font-black  flex items-center justify-center">
                        # 웹 관련 리포지토리 19개
                    </div>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


                {/* 기술스택 */}
                <div className="w-full py-20 text-6xl text-blue-700 font-black" id="skills">Skills</div>
                <div className="w-full pt-10 pb-40 border-b border-gray-400">
                    <div className="w-full flex flex-col mb-20">
                        <div className="text-4xl font-black mb-10">Strong</div>
                        <div className="flex flex-wrap gap-2.5 w-full mt-3 mb-6 text-xl font-black">
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Java
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Spring Boot
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Spring Cloud
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                AOP
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Keycloak
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Spring Security
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                JWT
                            </div>
                            <div className="bg-green-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                JPA
                            </div>

                            <div className="bg-sky-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                MySQL
                            </div>
                            
                            <div className="bg-red-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Kafka
                            </div>
                            <div className="bg-red-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Avro
                            </div>
                            <div className="bg-blue-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Docker
                            </div>
                            <div className="bg-blue-400 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Kubernetes
                            </div>
                            <div className="bg-green-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Swagger
                            </div>
                            <div>　　　　　　　　　　　　　　　　　　</div>
                            <div className="bg-yellow-500 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Grafana
                            </div>
                            <div className="bg-yellow-500 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Prometheus
                            </div>
                            <div className="bg-yellow-500 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Tempo
                            </div>
                            <div className="bg-yellow-500 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Loki
                            </div>
                            <div>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</div>

                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                EKS (<span className="text-gray-700">Elastic Kubernetes Service</span>)
                            </div>
                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                AWS LoadBalancer
                            </div>
                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Route53
                            </div>
                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Certificate Manager
                            </div>
                            <div>
                                　　　　　　
                            </div>
                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                S3
                            </div>
                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                CloudFront
                            </div>
                            <div className="bg-orange-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                RDS (<span className="text-gray-700">Relational Database Service</span>)
                            </div>

                            <div>
                                　　　　　　　　　　　　　　　　　　　　　　　
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                MSA
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                API Gateway
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                1 per Service
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                CQRS
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                EDA
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Outbox Pattern
                            </div>
                            <div className="border-2 border-black bg-white mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Saga Pattern
                            </div>

                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <div className="text-4xl font-black  mb-10">knowledgeable</div>
                        <div className="flex flex-wrap gap-2.5 w-full mt-3 mb-6 text-xl font-black">
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Resilience4J
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                MongoDB
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Redis
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Nginx
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Helm
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Git
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Jenkins
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Github Actions
                            </div>

                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Azure Static Web Apps
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Azure App Services
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Azure SQL Database
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                Azure Cache for redis
                            </div>
                            <div>　　　　</div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                React
                            </div>
                            <div className="bg-gray-300 mb-3 px-6 py-2 rounded-full text-center flex items-center justify-center">
                                TypeScript
                            </div>
                        </div>
                    </div>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* 실제로 유저의 피드백을 받은순간 */}
{/* 유저가 내것을 플레이하고 기뻐하고 피드백을하고 그자리에서 피드백을 수용하는 비록 웹개발은 아니었지만 이러한 소중한 기억이 항상 동기부여로 작용하고 어쩌고저쩌고 */}
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* 문서화 */}
{/* 개발할때 어떤식으로하고 이장점이 같은 팀이아니더라도 웹개발 동료들에게 도움을줘서 해당 클래스의 동료들이 전부 azure로 배포할 수 있게 도움을 줬던 기억이있음 */}
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className="w-full py-20 text-6xl text-blue-700 font-black" id="projects">Projects</div>
                {/* Miniblog (MSA Stack) */}
                <div className="w-full py-10 text-4xl text-[#293967] font-black" id="miniblog-msa">1. MiniBlog (MSA Stack)</div>
                {/* 프로젝트 기본 정보 */}
                <div className="text-4xl font-black pt-20 mb-20" id="miniblog-msa-info">프로젝트 정보</div>
                <div className="w-[885px] bg-white px-2 py-4 border-2 border-stone-600   rounded-md mb-20">
                    <p className="text-gray-700 text-xl leading-9 font-black">
                        앞선 두번의 팀 프로젝트에서 동일한 구조와 코드를 사용하는 자신을 발견하며 성장의 한계를 느꼈습니다.
                        변환의 필요성을 절감하고, 기존 블로그 프로젝트를 재구성하며<span className="pl-1 text-red-500 bg-gray-100 rounded-md"> 가상의 상황을 설정</span>하여
                        <span className="mx-1 px-1 text-red-500 bg-gray-100 rounded-md">문제 해결 역량을 키우기 위해</span>이 프로젝트를 시작했습니다.
                    </p>
                </div>
                <div className="flex justify-between items-center pb-40 border-b border-gray-300">
                    {/* Left Section */}
                    <div className="flex flex-col">
                        <div 
                            className="w-[550px] h-[380px] border border-gray-300 overflow-hidden cursor-pointer relative group">
                            <img 
                                className="h-full w-full object-cover aspect-square" 
                                src="https://images.ghtjr.com/c03e9f84-ccca-4974-bf32-ffa6b61163be_%ED%99%94%EB%A9%B4%EC%BA%A1%EC%B3%90.png" 
                                alt="Preview" />
                                    {/* Hover 오버레이 */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
                                <AiOutlineFullscreen className="text-white text-4xl m-2" />
                            </div>
                        </div>

                    </div>
                    {/* Right Section */}
                    <div className="w-[500px] flex flex-col gap-0.5">
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm">
                                기간
                            </div>
                            <p>2024.08.17 ~ 2024.12.31</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm">
                                팀구성
                            </div>
                            <p>최호석</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm">
                                역할
                            </div>
                            <p>Backend, Infra, Fronend</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm">
                                GitHub
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg flex gap-2 items-center" href="https://github.com/ghtjr410" target="_blank" rel="noopener noreferrer">https://github.com/ghtjr410<HiCursorClick size={17}/></a> 
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm">
                                배포주소
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg flex gap-2 items-center" href="https://blog.ghtjr.com" target="_blank" rel="noopener noreferrer">https://blog.ghtjr.com<HiCursorClick size={17}/></a> 
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px] py-1 rounded-md text-sm">
                                <span className="text-orange-600 ">★</span>Grafana 주소
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg flex gap-2 items-center" href="https://grafana.ghtjr.com" target="_blank" rel="noopener noreferrer">https://grafana.ghtjr.com<HiCursorClick size={17}/></a> 
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px] py-1 rounded-md text-sm">
                                <span className="text-orange-600 ">★</span>Grafana 사용방법
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg flex gap-2 items-center" href="https://grafana.ghtjr.com" target="_blank" rel="noopener noreferrer">https://grafana.ghtjr.com<HiCursorClick size={17}/></a> 
                        </div>
                        <div className="flex flex-col font-black mt-2">
                            <div className="flex flex-wrap gap-2 w-full text-xs">
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black  flex items-center justify-center">
                                    Java
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Spring Boot
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Keycloak
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Spring Cloud
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    JPA
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    AOP
                                </div>
                                <div className="bg-orange-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    MySQL
                                </div>
                                <div className="bg-yellow-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Kafka
                                </div>
                                <div className="bg-teal-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Docker
                                </div>
                                <div className="bg-teal-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Kubernetes
                                </div>
                                <div className="bg-green-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Grafana
                                </div>
                                <div className="bg-green-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Prometheus
                                </div>
                                <div className="bg-green-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Tempo
                                </div>
                                <div className="bg-green-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Loki
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    MSA
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    API Gateway
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    1 per Service
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    CQRS
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    EDA
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Outbox Pattern
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Saga Pattern
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    S3
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    CloudFront
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Route53
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Certificate Manager
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    AWS LoadBalancer
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    EKS (<span className="text-gray-700">Elastic Kubernetes Service</span>)
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    RDS (<span className="text-gray-700">Relational Database Service</span>)
                                </div>
                                <div className="bg-pink-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Swagger
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Resilience4J
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    MongoDB
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Nginx
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Helm
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Jenkins
                                </div>
                                <div className="bg-gray-300  px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Git
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    React
                                </div>
                                <div className="bg-gray-300  px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    TypeScript
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* 가상의 문제 정의 */}
                <div className="text-4xl font-black py-20" id="miniblog-msa-problem">가상의 상황, 문제정의</div>
                <div className="flex gap-5 items-center pt-10 pb-40 border-b border-gray-300">
                    {/* Left Section */}
                    <div className="flex flex-col gap-16">
                        <div className="flex font-black">
                            <div className="bg-white border-2 border-stone-600 w-[100px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                                트래픽 증가
                            </div>
                            <div className="ml-6">
                                <div className="mb-2">
                                    사용자 증가로 인해 트래픽이 감당되지 않는 상황을 가정
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRightLong className="text-red-500 mx-2" />스케일 업(서버 성능 향상)과 스케일 아웃(서버 확장) 중 선택이 필요
                                </div>
                            </div>
                        </div>
                        <div className="flex font-black">
                            <div className="bg-white border-2 border-stone-600 w-[100px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                                도메인 분석
                            </div>
                            <div className="ml-4">
                                <div className="mb-2">
                                    실제 서비스 중인 대형 사이트의 데이터를 참고
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRightLong className="text-red-500 mx-2" />평균 게시글당 조회수 250회, 댓글 1개, 추천 5개의 비율 (1:250:1:5)을 확인
                                </div>
                            </div>
                        </div>
                        <div className="flex font-black">
                            <div className="bg-white border-2 border-stone-600 w-[100px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                                트래픽 패턴
                            </div>
                            <div className="ml-4">
                                <div className="mb-2">
                                    게시글 읽기, 조회수, 추천이 가장 많이 사용된다고 가정
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRightLong className="text-red-500 mx-2" />특정 트래픽이 몰릴 때 해당 서버만 스케일 아웃하면 리소스를 효율적으로 활용 가능
                                </div>
                            </div>
                        </div>
                        <div className="flex font-black">
                            <div className="bg-white border-2 text-red-500 border-stone-600 w-[100px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                                <span className="text-yellow-500 mr-2">★</span>
                                <p className="mr-2">결론</p>
                            </div>
                            <div className="ml-4">
                                <div className="mb-2">
                                    어쩌고 저쩌고
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRightLong className="text-red-500 mx-2" />이쩌고 그쩌고
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Right Section */}
                    <div className="flex flex-1 gap-5">
                        <div className="flex flex-col items-center">
                            <div className="bg-white border-2 border-stone-600 w-[100px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                                A Site
                            </div>
                            <div className="mt-5 h-[400px] w-[170px] bg-gray-500 text-white">
                            <img 
                                    className="h-full w-full object-cover aspect-square" 
                                    src="https://images.ghtjr.com/ee81a93d-01a6-4693-a7f2-6b48ea50a8bf_이미지3.png" 
                                    alt="Preview" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white border-2 border-stone-600 w-[100px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                                B Site
                            </div>
                            <div className="mt-5  h-[400px] w-[170px] bg-gray-500 text-white">
                                <img 
                                    className="h-full w-full object-cover aspect-square" 
                                    src="https://images.ghtjr.com/4aaa87d7-05d4-4ba4-b0d0-19edd86646ac_이미지 4.png" 
                                    alt="Preview" />
                            </div>
                        </div>
                    </div>
                </div>
{/* https://images.ghtjr.com/2c173cd5-62df-4566-9b6c-c8479a620f64_이미지2.png / */}
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* 시스템 아키텍쳐 */}
                <div className="text-4xl font-black pt-20 mb-12" id="miniblog-msa-architecture">시스템 아키텍쳐</div>
                <div className="flex flex-col gap-10 pb-20 border-b border-gray-300 justify-between">
                    {/* Left Section */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-white border-2 border-stone-600 w-[250px] py-2 rounded-md text-2xl font-black text-center">
                                클라우드 아키텍쳐
                            </div>
                        <div 
                            className="w-[1070px] h-[800px] border border-gray-300 overflow-hidden cursor-pointer relative group">
                            <img 
                                className="h-full w-full object-cover aspect-square" 
                                src="https://images.ghtjr.com/5d31a948-5dfa-4b4a-b876-b3f30d116a62_%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90%20Image-final-final.png" 
                                alt="Preview" />
                                    {/* Hover 오버레이 */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
                                <AiOutlineFullscreen className="text-white text-4xl m-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="bg-white border-2 border-stone-600 w-[200px] py-1 rounded-md text-lg font-black flex justify-center items-center">
                            내부 서비스 아키텍쳐
                        </div>
                        <div 
                            className="w-[1070px] h-[650px] border border-gray-300 overflow-hidden cursor-pointer relative group">
                            <img 
                                className="h-full w-full object-cover aspect-square" 
                                src="https://images.ghtjr.com/b77fb7f2-360f-4694-a378-923693a32261_%EB%82%B4%EB%B6%80%20%EC%84%9C%EB%B2%84%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90%20Image.png" 
                                alt="Preview" />
                                    {/* Hover 오버레이 */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
                                <AiOutlineFullscreen className="text-white text-4xl m-2" />
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* 구현내용 */}
                <div className="text-3xl font-black pt-20 mb-12" id="miniblog-msa-develop">구현 내용</div>
                <div>
                    <div className="flex flex-col gap-7 font-black">
                        <div className="flex">
                            <div className="w-9 mr-3 text-2xl">
                                1.
                            </div>
                            <div className="w-full px-4 rounded-md text-base font-black flex  items-center leading-7">
                                API Gateway에서 Keycloak으로 인증을 처리하고, 하위 스트림 서버로 토큰 정보를 효율적으로 전달하기 위해 커스텀 헤더를 사용.  
                                <br/>Spring Security로 재검증하는 리소스 부담을 줄이는 대신, API Gateway에서 헤더 스푸핑 방지 메커니즘을 통해 안전성을 확보
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                2.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                CQRS와 1 per Service 원칙을 적용하여 서비스 간 분리 및 데이터 일관성 관리
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                3.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                Kafka를 활용한 게시글 작성 이벤트 처리와 Outbox Pattern 및 Saga Pattern으로 트랜잭션 관리
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                4.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                Saga Pattern에서 보상 트랜잭션을 배제하고 최종적 일관성을 통해 사용자 경험 향상
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                5.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                Kafka Topic을 통한 동기/비동기 처리를 활용하여 MSA의 느슨한 결합을 구현
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                6.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                각 서버의 로그, 매트릭, 분산 추적 데이터를 Grafana와 Prometheus로 시각화
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                7.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                OAuth2를 통한 SSO 인증 및 Grafana와 연동하여 통합 로그인을 지원
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                8.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                Docker Compose로 개발 환경을 구성하고, 네트워크 및 컨테이너 관리를 자동화
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                9.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                Kubernetes를 사용하여 퍼블릭 진입점과 내부 서버 통신을 관리하고, 회복 탄력성 제공
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                10.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                AWS Route53, Ingress Controller, Certificate Manager를 활용한 도메인 관리 및 배포 자동화
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                11.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                S3와 CloudFront를 활용한 이미지 서버 개발로 데이터 처리 성능을 최적화
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                12.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                ViewCount 동시성 제어와 다른 도메인의 동작 특성을 분석하여 최적화
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                13.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                MongoDB 기반 Query 서비스 구조 설계와 MongoTemplate을 활용한 효율적 데이터 접근
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                14.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                핸들러 패턴과 이벤트 타입 분류를 통해 서비스 확장성과 유지보수성 강화
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-7 mr-3 text-2xl">
                                15.
                            </div>
                            <div className="w-full px-6 rounded-md text-base font-black flex  items-center leading-7">
                                Repository 인터페이스로 추상화하여 확장 가능성을 확보하고 JPQL로 고급 쿼리 처리
                            </div>
                        </div>
                    </div>
                </div>



                
                {/* MusicalSpot */}
                <div className="w-full pt-20 text-4xl text-[#293967] font-black" id="musicalspot">2. MusicalSpot</div>
                <div className="w-full mt-6 mb-12 border-b border-gray-400"></div>
                {/* 프로젝트 기본 정보 */}
                <div className="text-3xl font-black mb-10">프로젝트 정보</div>
                <div className="flex justify-between items-center mb-16">
                    {/* Left Section */}
                    <div className="flex flex-col">
                        <div 
                            className="w-[500px] h-[342px] border border-gray-300 overflow-hidden cursor-pointer relative group">
                        <img 
                            className="h-full w-full object-cover aspect-square" 
                            src="https://images.ghtjr.com/c03e9f84-ccca-4974-bf32-ffa6b61163be_%ED%99%94%EB%A9%B4%EC%BA%A1%EC%B3%90.png" 
                            alt="Preview" />
                                    {/* Hover 오버레이 */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
                            <AiOutlineFullscreen className="text-white text-4xl m-2" />
                        </div>
                    </div>

                    </div>
                    {/* Right Section */}
                    <div className="w-[500px] flex flex-col gap-0.5">
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                기간
                            </div>
                            <p>2024.07.03 ~ 2024.07.25</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                팀구성
                            </div>
                            <p>최호석(PL), 전보경, 이지훈, 이환희</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                역할
                            </div>
                            <p>Backend, Infra</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                GitHub
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg" href="https://github.com/ghtjr410" target="_blank" rel="noopener noreferrer">https://github.com/ghtjr410</a> 
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                배포주소
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg" href="https://musical.ghtjr.com" target="_blank" rel="noopener noreferrer">https://musical.ghtjr.com</a> 
                        </div>
                        <div className="flex flex-col font-black mt-2">
                            <div className="flex flex-wrap gap-2 w-full text-xs">
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black  flex items-center justify-center">
                                    Java
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Spring Boot
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Spring Security
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    JWT
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    JPA
                                </div>
                                <div className="bg-orange-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    MySQL
                                </div>
                                <div className="bg-orange-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Redis
                                </div>
                                <div className="bg-teal-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Docker
                                </div>
                                <div className="bg-green-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Swagger
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Git
                                </div>
                                <div className="bg-blue-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    SourceTree
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Azure SQL Database
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Azure Cache for redis
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Azure Static Web Apps
                                </div>
                                <div className="bg-purple-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Azure App Services
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    GitHub Actions
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    React
                                </div>
                                <div className="bg-gray-300  px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    TypeScript
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>




                {/* MiniBlog (Old Version) */}
                <div className="w-full pt-20 text-4xl text-[#293967] font-black" id="miniblog-old">3. MiniBlog (Old Version)</div>
                <div className="w-full mt-6 mb-12 border-b border-gray-400"></div>
                {/* 프로젝트 기본 정보 */}
                <div className="text-3xl font-black mb-10">프로젝트 정보</div>
                <div className="flex justify-between items-center mb-16">
                    {/* Left Section */}
                    <div className="flex flex-col">
                        <div 
                            className="w-[500px] h-[342px] border border-gray-300 overflow-hidden cursor-pointer relative group">
                        <img 
                            className="h-full w-full object-cover aspect-square" 
                            src="https://images.ghtjr.com/c03e9f84-ccca-4974-bf32-ffa6b61163be_%ED%99%94%EB%A9%B4%EC%BA%A1%EC%B3%90.png" 
                            alt="Preview" />
                                    {/* Hover 오버레이 */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
                            <AiOutlineFullscreen className="text-white text-4xl m-2" />
                        </div>
                    </div>

                    </div>
                    {/* Right Section */}
                    <div className="w-[500px] flex flex-col gap-0.5">
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                기간
                            </div>
                            <p>2024.06.17 ~ 2024.07.04</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                팀구성
                            </div>
                            <p>최호석(PL), 노유정, 김용현</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                역할
                            </div>
                            <p>Backend, Fronend</p>
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                GitHub
                            </div>
                            <a className="hover:font-extrabold hover:bg-gray-300 rounded-lg" href="https://github.com/ghtjr410" target="_blank" rel="noopener noreferrer">https://github.com/ghtjr410</a> 
                        </div>
                        <div className="flex text-center items-center font-black gap-4">
                            <div className="bg-white border-2 border-stone-600 w-[140px]  px-4 py-1 rounded-md text-sm  ">
                                배포주소
                            </div>
                            <p>X</p>
                        </div>
                        <div className="flex flex-col font-black mt-2">
                            <div className="flex flex-wrap gap-2 w-full text-xs">
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black  flex items-center justify-center">
                                    Java
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Spring Boot
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Keycloak
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Spring Cloud
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    JWT
                                </div>
                                <div className="bg-red-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    JPA
                                </div>
                                <div className="bg-orange-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    MySQL
                                </div>
                                <div className="bg-orange-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Redis
                                </div>
                                <div className="bg-teal-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Docker
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    Git
                                </div>
                                <div className="bg-gray-300 px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    React
                                </div>
                                <div className="bg-gray-300  px-2 py-0.5 rounded-full text-center font-black flex items-center justify-center">
                                    TypeScript
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isProfileOpen && (
            <div
                className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
                onClick={closeProfileModal}
            >
                <div className="relative">
                    <img
                        className="max-w-full max-h-full rounded-lg"
                        src="https://images.ghtjr.com/905421de-286c-4f4f-9c57-ed90f39b0165_%EC%B5%9C%ED%98%B8%EC%84%9D%20-%EB%B0%98%EB%AA%85%ED%95%A8.jpg"
                        alt="Full Size"
                    />
                    <button
                        className="absolute top-2 right-2 text-white text-2xl font-bold"
                        onClick={closeProfileModal}
                    >
                        &times;
                    </button>
                </div>
            </div>
        )}
        </>         
    )
}

export default MainPage;