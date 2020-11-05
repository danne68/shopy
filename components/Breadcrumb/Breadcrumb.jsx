import { BiChevronRight } from "react-icons/bi";
const Breadcrumb = () => {
    return (
        <div className="page-title-area text-sm py-3 bg-gray-101">
            <div className="container">
                <ul className="flex">
                    <li className="flex items-center"><a href="/">Home</a><BiChevronRight /></li>
                    <li>Belted chino trousers polo</li>
                </ul>
            </div>
        </div>
    );
};
export default Breadcrumb;
