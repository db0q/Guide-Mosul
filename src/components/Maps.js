import "./MapsStyles.css";
function Maps(props) {
  return (
    <div className="form-container">
      <form>
      <iframe src={props.link} className='map-frame' allowFullScreen="" loading="lazy"></iframe>
      </form>
    </div>
  );
}
export default Maps;
