"use client";

import { useEffect } from "react";
import styles from "./Portal.module.scss";

type PortalProps = {
    color?: string;
    shadowColor1?: string;
    shadowColor2?: string;
    animationSpeed?: number;
    children: React.ReactNode
    width?: number
};

const Portal = ({
    color,
    shadowColor1,
    shadowColor2,
    animationSpeed,
    children,
    width
}: PortalProps) => {

    const encodedSvg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='397' height='99' viewBox='0 0 397 99' fill='none'><path d='M394.416 49.066c-.304 26.292-88.226 47.715-196.381 47.849C89.881 97.049 2.451 75.844 2.755 49.55m-.171.384C2.886 23.643 90.81 2.22 198.963 2.085c108.154-.133 195.584 21.072 195.28 47.364' stroke='${color || "#ff0000"}' stroke-width='${width || 2}'/></svg>`);

    const svgUrl = `url("data:image/svg+xml,${encodedSvg}")`;

    useEffect(() => {
        document.documentElement.style.setProperty("--color", color || "#ff0000");
        document.documentElement.style.setProperty("--shadow-color1", shadowColor1 || "#ff0000");
        document.documentElement.style.setProperty("--shadow-color2", shadowColor2 || "#0000ff");
        document.documentElement.style.setProperty("--animation-speed", (animationSpeed || 1) + "s");
        document.documentElement.style.setProperty("--svg", svgUrl);
    }, [color, shadowColor1, shadowColor2, animationSpeed, svgUrl]);

    return (
        <div className={styles.portal}>
            <div
                className={`${styles.portal__orbit_top} ${styles.portal__orbit}`}
                style={{
                    "--color": color,
                    "--shadow-color1": shadowColor1,
                    "--shadow-color2": shadowColor2,
                    "--svg": svgUrl
                } as React.CSSProperties}
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