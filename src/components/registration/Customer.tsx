
interface IGenre {
  handleGenre: (genre: string) => void
}

export default function Customer({ handleGenre }: IGenre) {

  return (
    <div>
      <label>Genre</label>
      <label>
        <input type="radio" name="genre" value="male" onChange={(e) => handleGenre(e.target.value)} /> M
      </label>
      <label>
        <input type="radio" name="genre" value="female" onChange={(e) => handleGenre(e.target.value)} /> F
      </label>
    </div>
  )
}