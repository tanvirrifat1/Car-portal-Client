import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = ` ${title} -Car-Portal`;
    }, [title])
}

export default useTitle;