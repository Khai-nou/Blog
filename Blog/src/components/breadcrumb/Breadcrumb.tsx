import { ReactNode } from "react"

type BreadcrumbProps = {
  children: ReactNode
  postNumber?: number | string
}

export function Breadcrumb(props: BreadcrumbProps): React.ReactElement {
  return (
    <div className="">
      <span>{props.children}</span>
      <span>{props.postNumber}</span>
    </div>
  )
}