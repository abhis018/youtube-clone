import Button from "./Button"

const ButtonList = () => {

  const list = ["All", "Music", "Cricket", "Comedy", "Trailers", "Movie", "Game", "Live", "Albums", "Recently Watched", "Recently uploaded", "News"];

  return (
    <div className='flex overflow-x-auto whitespace-nowrap'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Cricket"/>
      <Button name="Comedy"/>
      <Button name="Trailers"/>
      <Button name="Movie"/>
      <Button name="Game"/>
      <Button name="Live"/>
      <Button name="Albums"/>
      <Button name="Recently Watched"/>
      <Button name="Recently Uploaded"/>
      <Button name="News"/>
    </div>
  )
}

export default ButtonList