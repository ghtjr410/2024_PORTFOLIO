import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleNavigation = (url:string ,sectionId:string) => {
        navigate(url); // "/"로 네비게이트
        const targetSection = document.getElementById(sectionId); // 전달받은 ID로 섹션 참조
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <aside className="fixed flex flex-col gap-4 top-[calc(12%)]  left-[calc(50%+580px)] w-[450px] border-l-2 border-gray-400 ">
            <ul className="space-y-2 pl-2 font-bold  ">
                <li className="text-xl flex">
                    <p className="flex cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "about-me")}>
                        About Me
                    </p>
                </li>
                <li className="text-xl flex">
                    <p className="flex cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "skills")}>
                        Skills
                    </p>
                </li>
                <div className="">
                    <div className="flex mb-2 text-xl" >
                        <p className="flex cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "projects")}>
                            Projects
                        </p>
                    </div>
                    <ol className="space-y-2 text-xl ">
                        <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa")}>1. Miniblog (MSA Stack)</li>
                        <ul className="space-y-2 pl-4 font-bold text-base">
                            <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa-info")}>프로젝트 정보</li>
                            <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa-intro")}>프로젝트 설명</li>
                            <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa-problem")}>가상 문제정의</li>
                            <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa-architecture")}>시스템 아키텍쳐</li>
                            <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa-develop")}>구현 내용</li>
                            <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-msa-develop-1")}>1. API Gateway 인증과정, 커스텀헤더와 헤더 스푸핑 방지</li>

                        </ul>
                        <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "musicalspot")}>2. MusicalSpot</li>
                        <li className="cursor-pointer hover:text-gray-500" onClick={() => handleNavigation("/", "miniblog-old")}>3. Miniblog (Old Version)</li>
                    </ol>
                    
                </div>
            </ul>
        </aside>
    )

}

export default Sidebar;