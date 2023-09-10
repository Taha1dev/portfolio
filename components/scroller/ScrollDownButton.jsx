import styles from './scroll.module.css';
const ScrollDownButton = () => {
  return (
    <div>
    <span className={`${styles['scroll-btn']} `}>
      <a href="#">
        <span className={`${styles.mouse}`}>
          <span></span>
        </span>
      </a>
    </span>
    </div>
  );
};
export default ScrollDownButton;
