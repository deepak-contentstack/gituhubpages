import React from 'react'

export const updateDeprecatedProps = (deprecatedPropList, updatedPropsList) => {
  try {
    if (Array.isArray(deprecatedPropList) && Array.isArray(updatedPropsList)) {
      const deprecatedPropListSingleObject: any = Object.keys(deprecatedPropList[0]);
      deprecatedPropListSingleObject.map((iDeprecatedPropListSingleObject) => {
        updatedPropsList.map((iUpdatedPropsList) => {
          if (Object.keys(iUpdatedPropsList).includes(iDeprecatedPropListSingleObject)) {
            const newPropsName = deprecatedPropList[0][iDeprecatedPropListSingleObject]
            iUpdatedPropsList[newPropsName] = iUpdatedPropsList[iDeprecatedPropListSingleObject];
            if (process.env.ENV !== 'production') {
              console.warn(`${iDeprecatedPropListSingleObject} is deprecated instead use ${newPropsName}`)
            }
            delete iUpdatedPropsList[iDeprecatedPropListSingleObject]
          }
        })
      })
    }
    else {
      Object.keys(deprecatedPropList).map(oldPropName => {
        if (typeof deprecatedPropList[oldPropName] === 'object' && Object.keys(updatedPropsList).includes(oldPropName)) {
          updateDeprecatedProps(deprecatedPropList[oldPropName], updatedPropsList[oldPropName])
        }
        else if (Object.keys(updatedPropsList).includes(oldPropName)) {
          const newPropsName = deprecatedPropList[oldPropName]
          updatedPropsList[newPropsName] = updatedPropsList[oldPropName]
          if (process.env.ENV !== 'production') {
            console.warn(`${oldPropName} is deprecated instead use ${deprecatedPropList[oldPropName]}`)
          }
          delete updatedPropsList[oldPropName]
        }
      })
    }
    return updatedPropsList
  } catch (error) {
    console.log("updateDeprecatedProps -> error", error)
  }
}


const withDeprecatedProp = (WrappedComponent, deprecatedPropList, deprecatedComponentName?) => {
  if (typeof WrappedComponent === 'object' && WrappedComponent.type === 'method') {
    const cbWrapper = (cbArguments) => {
      const updatedPropsList = updateDeprecatedProps(deprecatedPropList, cbArguments)
      return WrappedComponent.callback(updatedPropsList)
    }
    return cbWrapper
  }

  const Component: any = (props: any) => {
    let updatedPropsList = { ...props }
    updatedPropsList = updateDeprecatedProps(deprecatedPropList, updatedPropsList)

    if (deprecatedComponentName) {
      if (deprecatedComponentName[WrappedComponent.name] !== WrappedComponent.name) {
        console.warn(`${WrappedComponent.name} component name is deprecated instead use ${deprecatedComponentName[WrappedComponent.name]}`)
        return (
          <WrappedComponent
            {...updatedPropsList}
          />
        )
      }
    }
    return (
      <WrappedComponent
        {...updatedPropsList}
      />
    );
  };
  Component.displayName = WrappedComponent.name
  return Component
}

export default withDeprecatedProp


// const withDeprecatedProp = (WrappedComponent, depricatedPropList, depricatedComponentName?) => {
//   const Component: any = (props: any) => {
//     const updatedPropsList = { ...props }
//     if (!(process.env.ENV !== 'production')) return WrappedComponent
//     Object.keys(props).map((propKey: any) => {
//       if (Object.keys(depricatedPropList).includes(propKey)) {
//         updatedPropsList[depricatedPropList[propKey]] = updatedPropsList[propKey]
//         delete updatedPropsList[propKey]
//         console.warn(`${propKey} is depricated from the component instead use ${depricatedPropList[propKey]} as prop`)
//       }
//       return
//     })
//     if (depricatedComponentName) {
//       if (depricatedComponentName[WrappedComponent.name] !== WrappedComponent.name) {
//         console.warn(`${WrappedComponent.name} component name is depricated instead use ${depricatedComponentName[WrappedComponent.name]}`)
//         return (
//           <WrappedComponent
//             {...updatedPropsList}
//           />
//         )
//       }
//     }
//     return (
//       <WrappedComponent
//         {...updatedPropsList}
//       />
//     );
//   };
//   Component.displayName = WrappedComponent.name
//   return Component
// }