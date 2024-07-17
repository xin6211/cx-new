import React, { CSSProperties } from "react";

interface RippleProps {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}

const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
}: RippleProps) {
    return (
        <div className="max-w-full overflow-hidden absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]">
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity;
                const animationDelay = `${i * 0.06}s`;
                const borderStyle = "solid";
                const borderOpacity = 100;

                return (
                    <div
                        key={i}
                        className={`absolute w-full h-full animate-ripple rounded-full bg-foreground/25 shadow-xl border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
                        style={
                            {
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity: opacity,
                                animationDelay: animationDelay,
                                borderStyle: borderStyle,
                                borderWidth: "1px",
                                borderRadius: "100%",
                                borderColor: `rgba(0,0,0,${borderOpacity / 100})`,
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";

export default Ripple;
