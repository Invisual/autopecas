export const formatVideoDuration = (duration) =>
  parseInt(duration / 60, 10) +
  ':' +
  parseInt(duration - Math.floor(duration / 60) * 60, 10).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  )

export const formatVideoCurrentTime = (currentTime) => {
  const seconds = parseInt(currentTime, 10).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

  return (
    parseInt(currentTime / 60, 10) +
    ':' +
    (seconds >= 60
      ? parseInt(seconds - 60, 10).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : seconds)
  )
}

export const parseBlogPosts = (edges) =>
  edges
    .filter((edge) => edge.node.frontmatter.status)
    .map(({ node }) => ({
      id: node.id,
      path: node.frontmatter.path,
      date: node.frontmatter.date,
      title: node.frontmatter.title,
      img: node.frontmatter.img,
      description: node.frontmatter.description,
    }))
