export const GifItem = ( props ) => {
  console.log(props)
  const { title, url } = props;
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
