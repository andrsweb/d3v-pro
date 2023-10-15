export const headerScroll = () => {                 //Header scroll function, if header scrolltop > 0, header add class 'scrolled'
	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY
		const header = document.querySelector('.header')

		if (!header) return

		if (scrollTop > 0) {
			if (!header.classList.contains('scrolled'))
				header.classList.add('scrolled')
		} else {
			header.classList.remove('scrolled')
		}
	})
}