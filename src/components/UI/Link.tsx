import {Link} from "react-router-dom";

export default function LinkButton({children, href = ''}: any) {
    return (
        <Link to={href} className='font-medium text-white underline hover:no-underline transition' chref={href}>{children}</Link>
    )
}