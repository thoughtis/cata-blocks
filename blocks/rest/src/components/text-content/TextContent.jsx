/**
 * Text Content
 * 
 * @param {string} text
 */
export default function TextContent( { text } ) {
	const textContent = document.createRange().createContextualFragment( text ).firstChild.textContent;
	return(
		<>{ textContent }</>
	)
}
