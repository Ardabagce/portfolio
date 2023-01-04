import React, { Component } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Sidebar from './Dashboard/Sidebar/Sidebar'

export default class dashboardSidebar extends Component {
  render() {
    return (
      <>
      <Disclosure>
        <Menu>
        <Menu.Button className="flex rounded bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src='Bars3Icon'
                        alt=""
                      />
                    </Menu.Button>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items>
        <Menu.Item><Sidebar/></Menu.Item>
        </Menu.Items>
        </Transition>
        </Menu>
    
    </Disclosure>
      </>
    )
  }
}
