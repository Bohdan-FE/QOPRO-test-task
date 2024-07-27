import { useEffect, useRef } from "react";

function useClosePopUp({ setIsActive }: { setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsActive(false)
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [ref, setIsActive]);


    return ref;
}

export default useClosePopUp;