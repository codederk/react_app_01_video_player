import React from 'react'

const Menu = (props) => {

  const handleClick = (e) => {
    const text = e.target.value;
    props.chooseVideo(text);
  }

  return (
    <form >
      <input type="radio" name="src" value="fast" id='fast' onClick={handleClick}/>
      <label htmlFor="fast">fast</label>
      <input type="radio" name="src" value="slow" id='slow' onClick={handleClick}/>
      <label htmlFor="slow">slow</label>
      <input type="radio" name="src" value="cute" id='cute' onClick={handleClick}/>
      <label htmlFor="cute">cute</label>
      <input type="radio" name="src" value="eek" id='eek' onClick={handleClick}/>
      <label htmlFor="eek">eek</label>
    </form>
  )
}

export default Menu