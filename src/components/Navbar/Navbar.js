import styles from "./Navbar.module.css";

function Navbar (props) {
    return ( 
    <>
        <div className={styles.container}>
            <h5 className={styles.navbar}> {props.title} </h5>
        </div>

    </>

    )
};

export {Navbar}