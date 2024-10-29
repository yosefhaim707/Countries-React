import { FC } from "react"


type TestProp = {
    element: JSX.Element
}

const Test: FC<TestProp> = (props: TestProp): JSX.Element => {
    return (
        props.element
    )
};

export default Test;