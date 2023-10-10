const Img = ({srcSet, className, src, width, height}) => {
	return (
		<picture className={className}>
			<source srcSet={srcSet} type="image/webp" />
			<img src={src} width={width} height={height} alt=""></img>
		</picture>
	)
}

export default Img