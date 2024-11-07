import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

interface LinkProps {
	to: string;
	icon: string;
	label: string;
}

export default function NavBarLink(props: LinkProps) {
	return (
		<NavLink
			to={props.to}
			className='flex text-white flex-row items-center gap-x-2 py-2 px-2'
		>
			{props.label}
		</NavLink>
	);
}
