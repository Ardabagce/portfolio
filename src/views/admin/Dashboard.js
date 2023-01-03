import React from "react";
import {useSelector} from 'react-redux'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import profilePlaceholder from '../../Assets/profilePlaceholder.jpeg'
import { Fragment } from 'react'
import { Bars3Icon} from '@heroicons/react/24/outline'

// components

import CardLineChart from "../../Components/Dashboard/Cards/CardLineChart.js";
import CardBarChart from "../../Components/Dashboard/Cards/CardBarChart.js";
import CardPageVisits from "../../Components/Dashboard/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../Components/Dashboard/Cards/CardSocialTraffic.js";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar.js";

export default function Dashboard() {

  const{user} = useSelector(state=>state.auth)

  if(user){
    return(
      <><Disclosure>
        <Menu>
        <Menu.Button className="flex rounded bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Bars3Icon/>
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
      <div className="flex flex-wrap">
        <p>Hoşgeldin {user.email}</p>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
    )

  }
  return (
    <div>
    <h1>Giriş yapmanız gerekmektedir!</h1>
  </div>
  );
}
