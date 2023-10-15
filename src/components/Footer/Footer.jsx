import Logo from '../UX/Logo/Logo'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<div className='footerWrapper'>
					<Logo />
					<div className="footerSocial">
						<a className="footerLink" href="https://www.linkedin.com/in/andrey-polovnov-3367a5273/" target='_blank'>
							LinkedIn
						</a>
						<a className="footerLink" href="https://t.me/andrsweb" target='_blank'>
							Telegram
						</a>
						<a className="footerLink" href="https://github.com/andrsweb" target='_blank'>
							GitHub
						</a>
						<a className="footerLink" href="mailto:webandrs@gmail.com">
							Gmail
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer