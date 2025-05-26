import { useNavigate } from "react-router-dom";

function SidebarItem({ label, selected, hasDropdown, icon }) {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        return () => navigate(path);
    }
    return (
        <li>
            <a
                onClick={handleNavigate("/profile")}
                className={`cursor-pointer flex items-center px-2 py-2 rounded font-medium transition-colors
          ${selected ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}
        `}
            >
                {/* 여기에 아이콘 삽입 */}
                <span className="w-5 h-5 mr-1 flex items-center justify-center">
                    {icon}
                </span>
                <span className="flex-1 text-sm">{label}</span>
                {hasDropdown && (
                    <span className="ml-2">
            {/* 드롭다운 화살표 아이콘 자리 */}
                        {/* <DropdownIcon /> */}
                        ▼
          </span>
                )}
            </a>
        </li>
    );
}

export default SidebarItem;