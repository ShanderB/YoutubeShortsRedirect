	const oldUrl = window.location.href

	const videoId = oldUrl.split("s/")[1]
	const title = document.title
	const newUrl = `https://www.youtube.com/watch?v=${videoId}`
	window.history.pushState('', title, newUrl)
	document.location.reload(true)