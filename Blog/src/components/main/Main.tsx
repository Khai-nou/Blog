import type { MainProps } from '../../types'

export function Main(props: MainProps): React.ReactElement {
  return (
    <main>
      {props.children}
    </main>
  )
}