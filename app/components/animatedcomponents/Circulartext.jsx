import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const getRotationTransition = (duration, from, loop = true) => ({
    from,
    to: from + 360,
    ease: "linear",
    duration,
    type: "tween",
    repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
    rotate: getRotationTransition(duration, from),
    scale: {
        type: "spring",
        damping: 20,
        stiffness: 300,
    },
});

const CircularText = ({
    text,
    spinDuration = 20,
    onHover = "speedUp",
    className = "",
}) => {
    const letters = Array.from(text);
    const controls = useAnimation();
    const rotation = useMotionValue(0);

    useEffect(() => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start),
        });
    }, [spinDuration, text, onHover, controls, rotation]);

    const handleHoverStart = () => {
        const start = rotation.get();
        if (!onHover) return;

        let transitionConfig;
        let scaleVal = 1;

        switch (onHover) {
            case "slowDown":
                transitionConfig = getTransition(spinDuration * 2, start);
                break;
            case "speedUp":
                transitionConfig = getTransition(spinDuration / 4, start);
                break;
            case "pause":
                transitionConfig = {
                    rotate: { type: "spring", damping: 20, stiffness: 300 },
                    scale: { type: "spring", damping: 20, stiffness: 300 },
                };
                scaleVal = 1;
                break;
            case "goBonkers":
                transitionConfig = getTransition(spinDuration / 20, start);
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = getTransition(spinDuration, start);
        }

        controls.start({
            rotate: start + 360,
            scale: scaleVal,
            transition: transitionConfig,
        });
    };

    const handleHoverEnd = () => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start),
        });
    };

    return (
        <div
            className={`m-0 mx-auto rounded-full w-[150px] h-[150px] relative text-white font-black text-center cursor-pointer origin-center ${className}`}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
        

            {/* Arrow in center - stays static */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* <ArrowRightIcon className="w-12 h-12 text-pink-500" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-white">
                    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                </svg>

            </div>

            {/* Rotating text wrapper */}
            <motion.div
                className="absolute inset-0"
                style={{ rotate: rotation }}
                initial={{ rotate: 0 }}
                animate={controls}
            >
                {letters.map((letter, i) => {
                    const rotationDeg = (360 / letters.length) * i;
                    const factor = Math.PI / letters.length;
                    const x = factor * i;
                    const y = factor * i;
                    const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

                    return (
                        <span
                            key={i}
                            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
                            style={{ transform, WebkitTransform: transform }}
                        >
                            {letter}
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );

};

export default CircularText;
