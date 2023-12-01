

interface MyComponentProps {
  textButton: string;
}

export default function ButtonsInicio(props: MyComponentProps) {
  return (
    <div className="buttons">
    <button className='buttonsInicio'>{props.textButton}</button>
  </div>
  )
}



