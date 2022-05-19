import { useHistory } from "react-router-dom";
export default function Header(props) {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goForWord = () => {
    history.goForward()
  }

  return (
    <>
      <div className="header-container" style={{ marginBottom: '10px', fontSize: '22px' }}>
        {props.children}
        <button style={{ margin: '0 10px' }} onClick={() => goBack()}>goBack</button>
        <button onClick={() => goForWord()}>goForWord</button>
      </div>
    </>
  )
} 
