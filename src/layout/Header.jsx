function Header() {
    return <nav className='cyan darken-1'>
        <div className='nav-wrapper'>
            <a
                href='https://andreyslesarchuk.github.io/react-movies/'
                className='brand-logo'>React movies</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><a
                    href='https://github.com/AndreySlesarchuk/react-movies'
                    target='_blank'
                    rel='noreferrer'
                >Repo</a></li>
            </ul>
        </div>
    </nav>
}

export {Header}
