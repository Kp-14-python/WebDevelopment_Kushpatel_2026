import { NavLink } from 'react-router-dom';

const navigation = [
    { label: 'Home', to: '/', end: true },
    { label: 'About', to: '/about' },
    { label: 'Education', to: '/education' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
];

export default function Layout() {
    return (
        <header className="site-header">
            <div className="header-content">
                <NavLink className="brand" to="/" end>
                    <span className="brand-mark" aria-hidden="true">🐉</span>
                    <span className="brand-name">My Portfolio</span>
                </NavLink>

                <nav className="site-nav" aria-label="Main navigation">
                    {navigation.map(({ label, to, end }) => (
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link${isActive ? ' active' : ''}`
                            }
                            end={end}
                            key={to}
                            to={to}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}