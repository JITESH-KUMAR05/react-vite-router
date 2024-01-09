import {link} from 'react-router-dom';
function  Index() {
  return (
    <div>
      <h1>Home</h1>
      <link to="/about">go to about</link>
    </div>
  )
}
export default Index;