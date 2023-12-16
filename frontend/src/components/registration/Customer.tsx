
interface IGender {
  handleGender: (gender: string) => void
}

export default function Customer({ handleGender }: IGender) {

  return (
    <div>
      <label>Género</label>
      <label>
        <input type="radio" name="gender" value="male" onChange={(e) => handleGender(e.target.value)} /> M
      </label>
      <label>
        <input type="radio" name="gender" value="female" onChange={(e) => handleGender(e.target.value)} /> F
      </label>
    </div>
  )
}