import React from 'react'
import renderer from 'react-test-renderer'

import PageHeader from './PageHeader'
import Button from '../Button/Button'
// import Icon from '../Icon/Icon'

describe('PageHeader', () => {
  it('render PageHeader with actions', () => {
    const DefaultHeader = () => {
      const pageActions = [
        {
          label: 'page label',
          onClick: () => alert('clicked'),
        },
      ]
      return <PageHeader title={{ label: 'Page header title' }} actions={pageActions} />
    }
    const tree = renderer.create(<DefaultHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('render PageHeader with information', () => {
  //   const HeaderWithInformation = () => {
  //     const pageActions = [
  //       {
  //         label: 'Cancel',
  //         onClick: () => alert('Cancel button clicked'),
  //         type: 'primary' as const,
  //       },
  //     ]
  //     return <PageHeader title={{ label: 'Page header title', info: '#' }} actions={pageActions} />
  //   }
  //   const tree = renderer.create(<HeaderWithInformation />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  it('render PageHeader with multiple actions', () => {
    const MultipleActions = () => {
      const pageActions = [
        {
          label: 'Cancel',
          onClick: () => alert('Cancel button clicked'),
          type: 'muted' as const,
        },
        {
          label: 'Save',
          onClick: () => alert('Save button clicked'),
          type: 'success' as const,
        },
        {
          label: (
            <Button buttonType="primary" onClick={() => alert('Button clicked')}>
              Button
            </Button>
          ),
        },
      ]
      return <PageHeader title={{ label: 'Page header title' }} actions={pageActions} />
    }
    const tree = renderer.create(<MultipleActions />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('render PageHeader with header content', () => {
  //   const HeaderContent = () => {
  //     const pageActions = [
  //       {
  //         label: 'Button',
  //         onClick: () => alert('Cancel button clicked'),
  //         type: 'primary' as const,
  //       },
  //     ]
  //     return (
  //       <PageHeader
  //         title={{ label: 'Page header title' }}
  //         content="Some header content"
  //         actions={pageActions}
  //       />
  //     )
  //   }
  //   const tree = renderer.create(<HeaderContent />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  it('render PageHeader with custom component in header', () => {
    const CustomComponentInHeader = () => {
      const pageActions = [
        {
          label: 'Cancel',
          onClick: () => alert('Cancel button clicked'),
          type: 'primary' as const,
        },
      ]
      const AnyComponent = <div></div>
      return (
        <PageHeader
          title={{ label: 'Page header title', component: AnyComponent }}
          actions={pageActions}
        />
      )
    }
    const tree = renderer.create(<CustomComponentInHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
