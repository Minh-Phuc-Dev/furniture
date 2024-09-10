import {LetterAvatar} from "common/Avatar";
import {useEffect, useRef} from "react";

const Navigation = () => {
    const header = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        if (header.current === null) {
            return
        }
        document.body.style.setProperty(
            "--layout-header-height",
            `${header.current.getBoundingClientRect().height}px`
        )
    }, [])

    return (
        <header
            ref={header}
            className="p-2 flex justify-end border-b"
        >
            <LetterAvatar
                size={32}
                label="Minh Phuc"
            />
        </header>
    );
};

export default Navigation