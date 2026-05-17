import { ReactNode } from "react"

type MainProps = {
  children: ReactNode
}

export function Main(props: MainProps): React.ReactElement {
  return (
    <main>
      {props.children}
    </main>
  )
}