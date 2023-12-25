import {MutableRefObject, useEffect} from 'react'

const useOutsideClick = <T extends HTMLElement>(
	ref: MutableRefObject<T | null>,
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	})
}

export default useOutsideClick
