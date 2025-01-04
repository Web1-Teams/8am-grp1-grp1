import './Main-contenar.css';
import '../username/Username';

  const MainContenar = (props) => {

      return (
          <div className="main-contenar">
              {props.children}
          </div>
              )

              };


              export default MainContenar;