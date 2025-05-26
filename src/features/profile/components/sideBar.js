import SidebarItem from "./sideBarItem";
import {UserIcon} from "../icon/userIcon";

export default function Sidebar() {
    return (
        <aside className="flex flex-col ml-12 sm:ml-48 lg:ml-60 mr-20 min-w-72 ">
            {/* Section 1 */}
            <div className="text-xs font-semibold text-gray-500 px-2 mb-1 mt-2">General</div>
            <ul className="space-y-1">
                <SidebarItem label="Public profile" selected icon={<UserIcon/>}/>
                {/*<SidebarItem label="Account" />*/}
            </ul>
            <div className="border-t my-4" />

            {/* Access */}
            {/*<div className="text-xs font-semibold text-gray-500 px-2 mb-1 mt-2">Access</div>*/}
            {/*<ul className="space-y-1">*/}
            {/*    <SidebarItem label="Billing and licensing" hasDropdown />*/}
            {/*</ul>*/}
            {/*<div className="border-t my-4" />*/}

            {/*/!* Code, planning, and automation *!/*/}
            {/*<div className="text-xs font-semibold text-gray-500 px-2 mb-1 mt-2">Code, planning, and automation</div>*/}
            {/*<ul className="space-y-1">*/}
            {/*    <SidebarItem label="Repositories" />*/}

            {/*</ul>*/}
        </aside>
    );
}