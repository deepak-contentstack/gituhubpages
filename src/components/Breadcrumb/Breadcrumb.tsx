import React, { useEffect, useState ,useRef} from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Breadcrumb.css'
import Tooltip  from '../Tooltip/Tooltip'
interface IBreadcrumbItem {
  name: React.ReactNode
  action?: (breadcrumbItem) => void
  path: string
}

interface IProps {
  maxWidth?:number
  tooltipPosition?:string
  testId?:string
  breadcrumbItems: Array<IBreadcrumbItem>
}

const Breadcrumb = (props: IProps) => {
  const { breadcrumbItems = []} = props;
  const totalItemsLength = breadcrumbItems.length;
  const [tooltipFlags, setTooltipFlags] = useState([]);
  const breadcrumbLinkRef: any = useRef([]);

  useEffect(()=>{
    const offsetWidthLimitFlags = [];

    breadcrumbLinkRef?.current?.forEach(function(element: any) {      
      offsetWidthLimitFlags.push(element?.offsetWidth >= props.maxWidth)
    })
    setTooltipFlags([...offsetWidthLimitFlags])
  }, [breadcrumbItems])
  
  return (
    <div className="Breadcrumb" data-test-id={props.testId}>
      {breadcrumbItems.map((breadcrumbItem: IBreadcrumbItem, index: number) => {
        let isCurrentPage = index === totalItemsLength - 1

        if (isCurrentPage) {
          const name: any = breadcrumbItem.name
          return (
            <>
              {tooltipFlags?.length && tooltipFlags[index] ? (
                   <Tooltip content={name} position={props.tooltipPosition}>
                      <span ref={el => breadcrumbLinkRef.current[index] = el} key={index} style={{maxWidth:props.maxWidth}} className="Breadcrumb__link--text">{name}</span>
                   </Tooltip>
                  ) : (<span ref={el => breadcrumbLinkRef.current[index] = el} className="Breadcrumb__link--text" key={index} style={{maxWidth:props.maxWidth}}>{name}</span>)}   
            </>
          )
        } 
        return (
          <>
            <span className="Breadcrumb__link flex-v-center"  key={index} onClick={() => breadcrumbItem.action(breadcrumbItem)}>
              {tooltipFlags?.length && tooltipFlags[index] ? (
                  <Tooltip content={breadcrumbItem.name} position={props.tooltipPosition}>
                  <span ref={el => breadcrumbLinkRef.current[index] = el} className="Breadcrumb__link--text " style={{maxWidth:props.maxWidth}}>{`${breadcrumbItem.name}`}</span>
                  </Tooltip>
                ) : (<span ref={el => breadcrumbLinkRef.current[index] = el} className="Breadcrumb__link--text" style={{maxWidth:props.maxWidth}}>{`${breadcrumbItem.name}`}</span>)}
              <span className="Breadcrumb__link--slash">{`/`}</span>
            </span>
          </>
        )
      })}
    </div>
  )
}

let withRouterBreadcrumb = withRouter(Breadcrumb)
Breadcrumb.defaultProps = {
  maxWidth: 500,
  tooltipPosition: "bottom",
  testId: 'cs-breadcrumb'
}
export default Breadcrumb
export { withRouterBreadcrumb }


// To revert back if anything fails
// // return (
//   //   <div className="Breadcrumb">
//   //     {breadcrumbItems.map((breadcrumbItem: IBreadcrumbItem, index: number) => {
//   //       let isCurrentPage = index === totalItemsLength - 1
//   //       return (
//   //         <span key={index} onClick={breadcrumbItem.action}>
//   //           {!isCurrentPage ? (
//   //             <>
//   //               <Link to={breadcrumbItem.path}> {breadcrumbItem.name}</Link> /
//   //             </>
//   //           ) : (
//   //             <span> {breadcrumbItem.name}</span>
//   //           )}
//   //         </span>
//   //       )
//   //     })}
//   //   </div>
//   // )