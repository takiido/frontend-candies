import styles from "./Portal.module.scss";

type PortalProps = {
  direction: "v" | "h"
  children: React.ReactNode
};

const Portal = ({ direction, children }: PortalProps) => {
  return (
    <div className={styles.portal}>
      <div
        className={`${styles.portal__orbit_top} ${styles.portal__orbit}`}
      />
      <div className={styles.portal__content}>
        {
            Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className={styles.portal__card}>
                    {children}
                </div>
            ))
        }
      </div>
      <div
        className={`${styles.portal__orbit_bottom} ${styles.portal__orbit}`}
      />
    </div>
  );
};

export default Portal;