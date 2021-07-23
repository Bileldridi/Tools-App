import './Tool.css';
const tool = (props) => {
    return (
        <div className="Tool">
            <p onClick={props.deleted}>{props.name} avec {props.width} cm largeur</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
};
export default tool;